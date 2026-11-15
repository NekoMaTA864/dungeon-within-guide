(() => {
  const content = window.DW_CONTENT;
  const grid = document.querySelector("#entry-grid");
  const detail = document.querySelector("#detail-content");
  const searchInput = document.querySelector("#search-input");
  const statusFilter = document.querySelector("#status-filter");
  const categoryTabs = document.querySelector(".filter-tabs");
  const emptyState = document.querySelector("#empty-state");
  const visibleCount = document.querySelector("#visible-count");
  const numberCount = (value) => String(value).padStart(2, "0");
  let activeCategory = "全部";
  let activeEntry = content.entries[0]?.id ?? null;

  const statusClass = (status) => ({
    "介面已觀察": "observed",
    "規則待驗證": "pending",
    "待版本核對": "pending",
    "官方資料": "official",
    "官方更新": "official",
    "社群資料": "community",
    "社群實測": "community",
    "玩家實測": "community",
    "社群攻略": "community",
    "社群攻略整理": "community",
    "社群個人心得": "community",
    "社群資料整理": "community",
    "社群 Wiki 建議": "community",
    "歷史資料": "history"
  })[status] ?? "source";

  const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);

  function initializeFilters() {
    const categories = [...new Set(content.entries.map((entry) => entry.category))];
    categoryTabs.innerHTML = [
      `<button class="filter-chip selected" type="button" data-category="全部" aria-pressed="true">全部 <span id="all-count">${numberCount(content.entries.length)}</span></button>`,
      ...categories.map((category) => `<button class="filter-chip" type="button" data-category="${escapeHtml(category)}" aria-pressed="false">${escapeHtml(category)}</button>`)
    ].join("");
    const statuses = [...new Set(content.entries.flatMap((entry) => [entry.status, entry.mechanicStatus]).filter(Boolean))];
    statusFilter.innerHTML = [
      `<option value="全部">全部狀態</option>`,
      ...statuses.map((status) => `<option value="${escapeHtml(status)}">${escapeHtml(status)}</option>`)
    ].join("");
  }

  function matches(entry) {
    const query = searchInput.value.trim().toLocaleLowerCase("zh-Hant");
    const sourceNames = (entry.sources ?? []).map((source) => source.name);
    const sectionText = (entry.sections ?? []).flatMap((section) => [section.heading, ...section.items]);
    const searchable = [entry.title, entry.english, entry.category, entry.summary, entry.version, ...sourceNames, ...sectionText, ...entry.aliases, ...entry.tags]
      .join(" ")
      .toLocaleLowerCase("zh-Hant");
    const categoryMatch = activeCategory === "全部" || entry.category === activeCategory;
    const statusMatch = statusFilter.value === "全部"
      || entry.status === statusFilter.value
      || entry.mechanicStatus === statusFilter.value;
    return categoryMatch && statusMatch && (!query || searchable.includes(query));
  }

  function renderDetail(entry) {
    if (!entry) {
      detail.innerHTML = `<div class="detail-empty"><span class="detail-empty-icon">✦</span><h3 id="detail-title">選一筆攻略</h3><p>選取左側卡片，查看搭配建議、理由與來源。</p></div>`;
      return;
    }
    const index = content.entries.findIndex((item) => item.id === entry.id) + 1;
    document.querySelector("#detail-number").textContent = `NO. ${numberCount(index)}`;
    const sources = entry.sources ?? (entry.source ? [{ name: entry.source, url: entry.sourceUrl }] : []);
    detail.innerHTML = `
      <div class="detail-category">${escapeHtml(entry.category)} <span>·</span> ${escapeHtml(entry.english)}</div>
      <h3 id="detail-title">${escapeHtml(entry.title)}</h3>
      <p class="detail-summary">${escapeHtml(entry.summary)}</p>
      <div class="detail-badges">
        <span class="legend-badge ${statusClass(entry.status)}">${escapeHtml(entry.status)}</span>
        <span class="legend-badge ${statusClass(entry.mechanicStatus)}">${escapeHtml(entry.mechanicStatus)}</span>
      </div>
      <div class="detail-divider"></div>
      <div class="article-sections">${(entry.sections ?? []).map((section) => `
        <section class="article-section">
          <h4>${escapeHtml(section.heading)}</h4>
          <ul class="observation-list">${section.items.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>
        </section>`).join("")}</div>
      <div class="caution-box"><span class="caution-icon">!</span><p>${escapeHtml(entry.caution)}</p></div>
      <div class="detail-source"><span class="source-icon">↳</span><span><small>資料來源</small><span class="source-links">${sources.map((source) => source.url
        ? `<a class="source-link" href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.name)}</a>`
        : `<strong>${escapeHtml(source.name)}</strong>`).join("")}</span><small>${escapeHtml(entry.updated)} · ${escapeHtml(entry.version || content.version)}</small></span></div>`;
  }

  function render() {
    const filtered = content.entries.filter(matches);
    grid.innerHTML = filtered.map((entry) => {
      const index = content.entries.findIndex((item) => item.id === entry.id) + 1;
      const selected = entry.id === activeEntry;
      return `<button class="entry-card${selected ? " is-active" : ""}" type="button" data-entry="${escapeHtml(entry.id)}" aria-pressed="${selected}">
        <span class="card-index">${numberCount(index)} <i>↗</i></span>
        <span class="card-category">${escapeHtml(entry.category)}</span>
        <span class="card-title">${escapeHtml(entry.title)}<small>${escapeHtml(entry.english)}</small></span>
        <span class="card-summary">${escapeHtml(entry.summary)}</span>
        <span class="card-bottom"><span class="mini-status"><i></i>${escapeHtml(entry.status)}</span><span class="card-arrow" aria-hidden="true">↗</span></span>
      </button>`;
    }).join("");
    emptyState.hidden = filtered.length > 0;
    grid.hidden = filtered.length === 0;
    visibleCount.textContent = `${numberCount(filtered.length)} 筆`;
    document.querySelector("#all-count").textContent = numberCount(content.entries.length);
    document.querySelector("#entry-total").textContent = numberCount(content.entries.length);
    if (filtered.some((entry) => entry.id === activeEntry)) {
      renderDetail(content.entries.find((entry) => entry.id === activeEntry));
    } else if (filtered.length) {
      activeEntry = filtered[0].id;
      renderDetail(filtered[0]);
    } else {
      renderDetail(null);
    }
  }

  grid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-entry]");
    if (!card) return;
    activeEntry = card.dataset.entry;
    render();
    document.querySelector("#detail-panel").scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  initializeFilters();

  categoryTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    categoryTabs.querySelectorAll(".filter-chip").forEach((chip) => {
      const selected = chip === button;
      chip.classList.toggle("selected", selected);
      chip.setAttribute("aria-pressed", String(selected));
    });
    render();
  });

  searchInput.addEventListener("input", render);
  statusFilter.addEventListener("change", render);
  document.querySelector("#search-form").addEventListener("submit", (event) => event.preventDefault());
  document.querySelector("#reset-filters").addEventListener("click", () => {
    searchInput.value = "";
    statusFilter.value = "全部";
    activeCategory = "全部";
    categoryTabs.querySelectorAll(".filter-chip").forEach((chip) => {
      const selected = chip.dataset.category === "全部";
      chip.classList.toggle("selected", selected);
      chip.setAttribute("aria-pressed", String(selected));
    });
    render();
    searchInput.focus();
  });

  const navToggle = document.querySelector("#nav-toggle");
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    document.querySelector("#main-nav").classList.toggle("is-open", !expanded);
  });
  document.querySelectorAll("#main-nav a").forEach((link) => link.addEventListener("click", () => {
    navToggle.setAttribute("aria-expanded", "false");
    document.querySelector("#main-nav").classList.remove("is-open");
  }));

  document.querySelector("#footer-year").textContent = new Date().getFullYear();
  render();
})();

