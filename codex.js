(() => {
  const { lords, monsters, facilities, sources } = window.DW_CODEX;
  const groups = { lords, monsters, facilities };
  const allEntries = [...lords, ...monsters, ...facilities];
  const relatedLords = {
    desponia: ["physis", "grim"],
    aura: ["behemoth"],
    rhea: ["behemoth", "nemea", "emmelia"],
    zaria: ["physis", "behemoth", "maw"],
    ostea: ["behemoth", "grim", "nemea", "fortress", "rampart"],
    quintessa: ["emmelia", "ley"],
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
    const matches = groups[current.key].filter(({ name, sub, summary }) =>
      [name, sub, summary].some((text) => text.toLocaleLowerCase().includes(query)));
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

  function renderRoute(entry, route) {
    const routeNav = element("nav", null, "route-nav");
    routeNav.setAttribute("aria-label", "魔王流派");
    for (const option of entry.routes) {
      routeNav.append(anchor(option.title, entryHash(entry) + "/" + option.id, route === option));
    }
    const layout = element("ol", null, "layout");
    layout.setAttribute("aria-label", "地宮示意，依敵人入侵方向排列");
    for (const cell of route.layout) layout.append(element("li", cell));
    detail.append(
      routeNav,
      element("p", route.status, "status"),
      section("地宮配置", route.placement, layout),
      section("魔物與部件", route.team),
      section("權能取捨", route.authority),
      section("昇天、晉升與魔王特質", route.ascension),
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
    } else {
      detail.append(element("p", entry.status, "status"));
      for (const [title, text] of entry.sections) detail.append(section(title, text));
    }
    renderRelated(entry.links || relatedLords[entry.id]);
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
