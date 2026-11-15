(() => {
  const content = window.DW_CONTENT;
  const grid = document.querySelector("#entry-grid");
  const detail = document.querySelector("#detail-content");
  const searchInput = document.querySelector("#search-input");
  const statusFilter = document.querySelector("#status-filter");
  const emptyState = document.querySelector("#empty-state");
  const visibleCount = document.querySelector("#visible-count");
  const numberCount = (value) => String(value).padStart(2, "0");
  let activeCategory = "全部";
  let activeEntry = content.entries[0]?.id ?? null;

  const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);

  function matches(entry) {
    const query = searchInput.value.trim().toLocaleLowerCase("zh-Hant");
    const searchable = [entry.title, entry.english, entry.summary, ...entry.aliases, ...entry.tags]
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
      detail.innerHTML = `<div class="detail-empty"><span class="detail-empty-icon">✦</span><h3 id="detail-title">選一筆資料</h3><p>選取左側卡片，查看觀察摘要、來源與待驗證事項。</p></div>`;
      return;
    }
    const index = content.entries.findIndex((item) => item.id === entry.id) + 1;
    document.querySelector("#detail-number").textContent = `NO. ${numberCount(index)}`;
    detail.innerHTML = `
      <div class="detail-category">${escapeHtml(entry.category)} <span>·</span> ${escapeHtml(entry.english)}</div>
      <h3 id="detail-title">${escapeHtml(entry.title)}</h3>
      <p class="detail-summary">${escapeHtml(entry.summary)}</p>
      <div class="detail-badges">
        <span class="legend-badge observed">${escapeHtml(entry.status)}</span>
        <span class="legend-badge pending">${escapeHtml(entry.mechanicStatus)}</span>
      </div>
      <div class="detail-divider"></div>
      <h4>介面觀察</h4>
      <ul class="observation-list">${entry.observation.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>
      <div class="caution-box"><span class="caution-icon">!</span><p>${escapeHtml(entry.caution)}</p></div>
      <div class="detail-source"><span class="source-icon">↳</span><span><small>資料來源</small><strong>${escapeHtml(entry.source)}</strong><small>${escapeHtml(entry.updated)} · ${escapeHtml(content.version)}</small></span></div>`;
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

  document.querySelectorAll(".filter-chip").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      document.querySelectorAll(".filter-chip").forEach((chip) => {
        const selected = chip === button;
        chip.classList.toggle("selected", selected);
        chip.setAttribute("aria-pressed", String(selected));
      });
      render();
    });
  });

  searchInput.addEventListener("input", render);
  statusFilter.addEventListener("change", render);
  document.querySelector("#search-form").addEventListener("submit", (event) => event.preventDefault());
  document.querySelector("#reset-filters").addEventListener("click", () => {
    searchInput.value = "";
    statusFilter.value = "全部";
    activeCategory = "全部";
    document.querySelectorAll(".filter-chip").forEach((chip) => {
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

