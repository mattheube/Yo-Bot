(() => {
  "use strict";

  const bingoNames = Object.freeze({
    fr: "bingo-kai",
    en: "crank-kai",
    es: "expendekai",
    it: "slot-kai",
    de: "yo-kaimat",
    "pt-BR": "crank-a-kai",
    ru: "йокамат",
    ar: "bingo-kai",
    ja: "妖怪ガシャ",
    "ja-Latn": "bingo-kai"
  });

  const selector = document.querySelector("#site-language");
  const search = document.querySelector("#command-search");
  let storedLanguage = "fr";

  try {
    storedLanguage = localStorage.getItem("yoBotSiteLanguage") || "fr";
  } catch {
    // The site still works if storage is disabled by the browser.
  }

  function applyLanguage(language) {
    const textLanguage = language === "en" ? "en" : "fr";
    document.documentElement.lang = textLanguage;
    document.documentElement.dir = "ltr";
    document.querySelectorAll("[data-fr][data-en]").forEach((element) => {
      element.textContent = element.dataset[textLanguage];
    });
    document.querySelectorAll('[data-command-localized="bingo"]').forEach((element) => {
      element.textContent = bingoNames[language] || "bingo-kai";
    });
    if (selector) selector.value = language;
    if (search) {
      search.placeholder = textLanguage === "fr"
        ? "Commande ou description…"
        : "Command or description…";
    }
    try {
      localStorage.setItem("yoBotSiteLanguage", language);
    } catch {
      // Do not block language switching when storage is unavailable.
    }
    if (search && search.value) search.dispatchEvent(new Event("input"));
  }

  if (selector) {
    selector.addEventListener("change", () => applyLanguage(selector.value));
  }
  applyLanguage(bingoNames[storedLanguage] ? storedLanguage : "fr");

  if (search) {
    const rows = [...document.querySelectorAll(".command-row")];
    const sections = [...document.querySelectorAll(".command-section")];
    const noResults = document.querySelector("#no-results");
    search.addEventListener("input", () => {
      const query = search.value.trim().toLocaleLowerCase();
      let visibleCount = 0;
      rows.forEach((row) => {
        const haystack = `${row.dataset.search || ""} ${row.textContent}`.toLocaleLowerCase();
        const visible = !query || haystack.includes(query);
        row.hidden = !visible;
        if (visible) visibleCount += 1;
      });
      sections.forEach((section) => {
        const hasVisibleRows = [...section.querySelectorAll(".command-row")].some((row) => !row.hidden);
        section.hidden = !hasVisibleRows;
      });
      noResults.hidden = visibleCount !== 0;
    });
  }

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
  }
})();
