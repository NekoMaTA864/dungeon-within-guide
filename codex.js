(() => {
  const { lords, monsters, facilities, recipes, sources } = window.DW_CODEX;
  const groups = { lords, monsters, facilities, recipes };
  const allEntries = [...lords, ...monsters, ...facilities, ...recipes];
  const relatedLords = {
    desponia: ["physis", "grim", "fountain", "lounge"],
    aura: ["fountain", "world-tree", "behemoth"],
    rhea: ["behemoth", "nemea", "emmelia", "last-stand"],
    zaria: ["physis", "behemoth", "maw"],
    ostea: ["behemoth", "grim", "nemea", "fortress", "rampart", "absolute-zero", "frost-pillar", "poison-flow", "catapult-trap"],
    quintessa: ["emmelia", "ley", "absolute-zero"],
  };
  const search = document.querySelector("#lookup");
  const entries = document.querySelector("#entries");
  const detail = document.querySelector("#detail");
  const tabs = document.querySelectorAll("[data-category]");
  let previousCategory;
  let current;

  function element(tag, label, className) {
    const node = document.createElement(tag);
    if (label) node.textContent = label;
    if (className) node.className = className;
    return node;
  }

  function anchor(label, href, active = false) {
    const link = element("a", label);
    link.href = href;
    if (active) link.setAttribute("aria-current", "page");
    return link;
  }

  function entryHash(entry) {
    const category = Object.keys(groups).find((key) => groups[key].includes(entry));
    return "#" + category + "/" + entry.id;
  }

  function readLocation() {
    const [category, id, routeId] = location.hash.slice(1).split("/");
    const key = Object.hasOwn(groups, category) ? category : "lords";
    const entry = groups[key].find((record) => record.id === id) || groups[key][0];
    const route = entry.routes?.find((record) => record.id === routeId) || entry.routes?.[0];
    return { key, entry, route };
  }

  function renderIndex() {
    const query = search.value.trim().toLocaleLowerCase();
    const matches = groups[current.key].filter(({ name, sub, summary, ingredients = [] }) =>
      [name, sub, summary, ...ingredients].some((text) => text.toLocaleLowerCase().includes(query)));
    entries.replaceChildren();
    for (const item of matches) {
      const link = anchor(item.name, entryHash(item), item === current.entry);
      link.append(element("small", item.sub));
      entries.append(link);
    }
    if (matches.length === 0) entries.append(element("p", "找不到符合的條目。"));
  }

  function section(heading, text, extra) {
    const node = element("section", null, "guide-section");
    node.append(element("h3", heading), element("p", text));
    if (extra) node.append(extra);
    return node;
  }

  const expansionStages = [
    { label: "Stage 1｜3×3 開局", width: 3, bottom: 1, top: 3, doors: 1, entranceStage: 1, entrances: [["right",2]], hint: "通過 Stage 1 後可領第一次橫向擴建。" },
    { label: "Stage 2｜4×3 向右", width: 4, bottom: 1, top: 3, doors: 1, entranceStage: 2, entrances: [["right",2]], hint: "多出的右欄可先留空，或補入口側攔截。通過 Stage 2 後可向下擴建。" },
    { label: "Stage 3–4｜4×4 向下", width: 4, bottom: 0, top: 3, doors: 2, entranceStage: 3, entrances: [["top",1],["right",2]], hint: "最下方多一列，魔王房兩條通道，可各放一間狩獵場，或用一座 2×2 跨兩條。通過 Stage 4 後可再向右擴建。" },
    { label: "Stage 5–6｜5×4 再向右", width: 5, bottom: 0, top: 3, doors: 2, entranceStage: 5, entrances: [["top",2],["right",2],["bottom",2]], hint: "右側再一欄。要不要領 Stage 6 的縱向擴建，請看上方該流派的證據與守線條件。" },
    { label: "Stage 7–8｜5×5 向上", width: 5, bottom: 0, top: 4, doors: 3, entranceStage: 7, entrances: [["top",2],["right",4],["right",2],["right",0],["bottom",2]], hint: "最上方多一列，魔王房多一條通道。圖上以第二狩獵場補第三條路，實際仍要測漏怪和戰力分配。" },
    { label: "Stage 7–8｜5×4 跳過最後擴建", width: 5, bottom: 0, top: 3, doors: 2, entrances: [], hint: "沿用 5×4 房間示意與魔王房兩條通道。外圍出怪口座標待核對。" },
  ];

  function stageCells(layout, stage) {
    const rooms = [...(stage.bottom === 1 ? layout.start : layout.cells)];
    if (stage.width === 5) rooms.push(...(layout.wide || []));
    if (stage.doors === 3) {
      rooms.push(...(layout.full || []));
      const support = rooms.findIndex(({ x, y }) => x === 0 && y === 3);
      if (support !== -1) rooms.splice(support, 1);
      rooms.push(layout.third);
    }
    return rooms;
  }

  function renderLayout(layout) {
    const figure = element("figure", null, "dungeon-figure");
    figure.append(element("figcaption", "地宮擴建｜寬 × 高，魔王房在左側"));
    const label = element("label", "查看擴建階段", "stage-label");
    const select = element("select");
    expansionStages.forEach((stage, index) => {
      const option = element("option", stage.label);
      option.value = String(index);
      select.append(option);
    });
    label.append(select);
    const board = element("div", null, "dungeon-board");
    const hint = element("p", null, "board-note");
    const entranceNote = element("p", null, "board-note");
    const source = element("p", "前五張圖以戰線擴張每次都領獎勵為準。可跳過擴建，敵方入口仍可能隨關卡增加；5×4 保留魔王房兩條通道。圖用參考畫面的 4×4 座標對齊各階段，早期顯示座標請以遊戲為準。獎勵順序依社群紀錄，B223 尚未逐關實測。", "board-note");
    source.append(" ", anchor("擴建紀錄", "https://wikiwiki.jp/dunwith/%E6%97%85/%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%9A%E3%83%BC%E3%83%B3"));
    const guide = element("p", "配地宮看兩個數字：格子能不能覆蓋走線，以及右上角「上限－已佔用」夠不夠主隊和部件。先集中一隊；角落缺用途時可留空，缺支配力可用 Lounge，再依漏怪位置決定是否開第二隊。", "board-note");
    guide.append(" ", anchor("支配力設施怎麼放", "#facilities/lounge"));
    figure.append(label, board, entranceNote, hint, guide, source);

    function tile(col, row, width, height, name, coordinate, kind) {
      const node = element("div", null, "dungeon-tile tile-" + kind);
      node.style.gridColumn = col + " / span " + width;
      node.style.gridRow = row + " / span " + height;
      node.append(element("span", coordinate, "tile-label"), element("strong", name));
      board.append(node);
      return node;
    }

    function draw(stage) {
      const { width, bottom, top, doors } = stage;
      const rooms = stageCells(layout, stage);
      board.replaceChildren(element("span", "魔王側", "board-side"));
      board.style.setProperty("--board-width", width);
      board.style.setProperty("--board-height", top - bottom + 1);
      for (let x = 0; x < width; x++) {
        const axis = element("span", "X " + x, "board-axis");
        axis.style.gridColumn = String(x + 2);
        axis.style.gridRow = "1";
        board.append(axis);
      }
      const firstDoorY = doors === 3 ? 3 : 2;
      tile(1, top - firstDoorY + 3, 1, doors, "魔王房", doors + " 條通道", "lord");
      for (let y = top; y >= bottom; y--) {
        for (let x = 0; x < width; x++) {
          const row = top - y + 3;
          const room = rooms.find((cell) => x >= cell.x && x < cell.x + cell.w &&
            y <= cell.y && y > cell.y - cell.h);
          if (!room) {
            tile(x + 2, row, 1, 1, "空格", x + "-" + y, "empty");
          } else if (room.x === x && room.y === y) {
            const size = room.w > 1 || room.h > 1 ? " · " + room.w + "×" + room.h : "";
            const node = tile(x + 2, row, room.w, room.h, room.name, x + "-" + y + size, room.kind);
            if (room.role) node.append(element("small", room.role));
          }
        }
      }
      for (const [edge, coordinate] of stage.entrances) {
        const isRight = edge === "right";
        const x = isRight ? width - 1 : coordinate;
        const y = isRight ? coordinate : edge === "top" ? top : bottom;
        const direction = { top: "上方", right: "右側", bottom: "下方" }[edge];
        const description = direction + "出怪口，接 " + x + "-" + y;
        const marker = element("span", "X", "board-entrance");
        marker.setAttribute("role", "img");
        marker.setAttribute("aria-label", description);
        marker.title = description;
        marker.style.gridColumn = String(isRight ? width + 2 : x + 2);
        marker.style.gridRow = String(isRight ? top - y + 3 : edge === "top" ? 2 : top - bottom + 4);
        board.append(marker);
      }
      entranceNote.textContent = stage.entranceStage
        ? "X 為社群紀錄的 Stage " + stage.entranceStage + " 外圍出怪口。同尺寸其他關卡、跳過擴建及永恆戰爭以實戰為準。"
        : "此劇情分支的外圍出怪口座標尚待核對。";
      if (width === 5 && top === 3) {
        entranceNote.append(" ", anchor("另看奧斯蒂雅 B212 無盡 33-1 的 5×4 實錄", "sources.html#ostea-video"));
      }
      if (top === 4) {
        entranceNote.append(" ", anchor("另看 Aura v0.7.4 的上側入口實錄", "sources.html#aura-video"));
      }
      hint.textContent = stage.hint;
    }

    select.addEventListener("change", () => draw(expansionStages[Number(select.value)]));
    const initialStage = layout.defaultStage ?? 0;
    select.value = String(initialStage);
    draw(expansionStages[initialStage]);
    return figure;
  }

  function recipeTable() {
    const table = element("table", null, "recipe-table");
    table.append(element("caption", "已整理的設施配方｜B223 以遊戲合成介面為準"));
    const header = table.createTHead().insertRow();
    for (const label of ["成品", "材料"]) {
      const cell = element("th", label);
      cell.scope = "col";
      header.append(cell);
    }
    const body = table.createTBody();
    for (const recipe of recipes.filter(({ ingredients }) => ingredients)) {
      const row = body.insertRow();
      row.insertCell().append(anchor(recipe.name, entryHash(recipe)));
      row.insertCell().textContent = recipe.ingredients.join(" ＋ ");
    }
    return table;
  }

  function renderChecklist(items) {
    const list = element("dl", null, "build-checklist");
    for (const [name, guidance] of items) {
      list.append(element("dt", name), element("dd", guidance));
    }
    return list;
  }

  function renderRoute(entry, route) {
    const routeNav = element("nav", null, "route-nav");
    routeNav.setAttribute("aria-label", "魔王流派");
    for (const option of entry.routes) {
      routeNav.append(anchor(option.title, entryHash(entry) + "/" + option.id, route === option));
    }
    const evidence = element("p", "地宮圖來源｜" + route.mapEvidence.note, "board-note");
    const [sourceName, sourceUrl] = sources[route.mapEvidence.source];
    evidence.append(" ", anchor(sourceName, sourceUrl), " · ", anchor("查設施配方", "#recipes"));
    const checklist = element("ol");
    for (const step of route.actions) checklist.append(element("li", step));
    const { title, proof, decision, confidence, refs } = route.expansion;
    const stop = element("aside", null, "guide-section");
    const citations = element("ul", null, "sources");
    for (const ref of refs) {
      const [label, url] = sources[ref];
      const item = element("li");
      item.append(anchor(label, url));
      citations.append(item);
    }
    stop.append(
      element("h3", "擴建判斷｜" + title),
      element("p", proof),
      element("p", decision),
      element("p", confidence, "board-note"),
      citations
    );
    detail.append(
      routeNav,
      stop,
      element("p", route.status, "status"),
      section("先配這一套", "依 B223 機制與舊案例整理的試跑順序。部件效果和敵我判定先看當前面板。", checklist),
      section("地宮配置", route.placement, renderLayout(route.layout)),
      evidence,
      section("隊伍與養成順序", "依序看核心位置、部件、權能、晉升、昇天和魔王特質。", renderChecklist(route.checklist)),
      section("遺物與關卡優先級", route.path),
      section("版本適用性", route.version)
    );
  }

  function renderRelated(ids) {
    const links = element("div", null, "related");
    for (const id of ids) {
      const entry = allEntries.find((record) => record.id === id);
      links.append(anchor(entry.name, entryHash(entry)));
    }
    const container = element("section", null, "guide-section");
    container.append(element("h3", "相關圖鑑"), links);
    detail.append(container);
  }

  function renderSources(ids) {
    const list = element("ul", null, "sources");
    for (const id of ids) {
      const [label, url] = sources[id];
      const item = element("li");
      item.append(anchor(label, url));
      list.append(item);
    }
    const container = element("section", null, "guide-section");
    container.append(element("h3", "資料來源"), list);
    detail.append(container);
  }

  function render() {
    current = readLocation();
    const { key, entry, route } = current;
    if (previousCategory !== key) search.value = "";
    previousCategory = key;
    for (const tab of tabs) {
      if (tab.dataset.category === key) tab.setAttribute("aria-current", "page");
      else tab.removeAttribute("aria-current");
    }
    renderIndex();

    const heading = element("h2", entry.name);
    heading.id = "entry-title";
    detail.replaceChildren(heading, element("p", entry.sub, "subtitle"), element("p", entry.summary));
    if (route) {
      renderRoute(entry, route);
    } else if (entry.recipeIndex) {
      detail.append(recipeTable());
    } else {
      detail.append(element("p", entry.status, "status"));
      for (const [title, text] of entry.sections) detail.append(section(title, text));
    }
    const related = entry.links || relatedLords[entry.id];
    if (related?.length) renderRelated(related);
    renderSources(route?.sources || entry.sources);
    document.title = entry.name + "｜Dungeon Within 圖鑑";
  }

  if (["#library", "#method", "#about"].includes(location.hash)) {
    location.replace("guides.html" + location.hash);
  } else {
    search.addEventListener("input", renderIndex);
    window.addEventListener("hashchange", render);
    render();
  }
})();
