const id = new URLSearchParams(window.location.search).get("id");

fetch("data/works.json")
  .then(res => res.json())
  .then(data => {
    const w = data.find(item => item.id === id && item.published);
    if (!w) return;

    // Title & meta
    document.title = w.seo?.title || w.title;

    // Meta description
    const meta = document.querySelector('meta[name="description"]');
    if (meta && w.seo?.description) {
      meta.setAttribute("content", w.seo.description);
    }

    const titleEl = document.getElementById("cs-title");
    const subtitleEl = document.getElementById("cs-subtitle");
    const imageEl = document.getElementById("cs-image");
    const contentEl = document.getElementById("cs-content");

    titleEl.textContent = w.title;
    subtitleEl.textContent = w.subtitle;
    imageEl.src = w.image;
    imageEl.alt = w.title;

    // 🔴 THIS PART IS CRITICAL
    if (w.contentFile) {
      fetch(w.contentFile)
        .then(r => r.text())
        .then(md => {
          contentEl.innerHTML = marked.parse(md);
        });
    }
  })
  .catch(err => {
    console.error("Failed to load case study:", err);
  });


