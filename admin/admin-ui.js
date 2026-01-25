const KEY = "caseStudies";
let data = [];
let current = null;

const list = document.getElementById("list");

/* -------------------------
   INITIAL BOOTSTRAP
-------------------------- */
async function init() {
  const stored = localStorage.getItem(KEY);

  if (stored) {
    // Use local working copy
    data = JSON.parse(stored);
  } else {
    // First load → seed from works.json
    try {
      const res = await fetch("../data/works.json");
      data = await res.json();
      localStorage.setItem(KEY, JSON.stringify(data));
    } catch (err) {
      console.error("Failed to load works.json", err);
      data = [];
    }
  }

  renderList();
  if (data.length > 0) {
    load(0);
  } else {
    newEntry();
  }
}

/* -------------------------
   LIST RENDERING
-------------------------- */
function renderList() {
  list.innerHTML = "";
  data.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "item" + (i === current ? " active" : "");
    div.textContent = item.title || "Untitled";
    div.draggable = true;

    div.onclick = () => load(i);

    div.ondragstart = e => e.dataTransfer.setData("i", i);
    div.ondragover = e => e.preventDefault();
    div.ondrop = e => {
      const from = e.dataTransfer.getData("i");
      data.splice(i, 0, data.splice(from, 1)[0]);
      saveStorage();
      renderList();
    };

    list.appendChild(div);
  });
}

/* -------------------------
   LOAD ENTRY
-------------------------- */
function load(i) {
  current = i;
  const d = data[i];

  id.value = d.id;
  title.value = d.title;
  subtitle.value = d.subtitle;
  image.value = d.image;
  theme.value = d.theme || "purple";
  seoTitle.value = d.seo?.title || "";
  seoDesc.value = d.seo?.description || "";
  published.value = String(d.published);
  content.value = d.content || "";

  previewMarkdown();
  renderList();
}

/* -------------------------
   NEW ENTRY
-------------------------- */
function newEntry() {
  current = null;

  id.value = crypto.randomUUID();
  title.value = "";
  subtitle.value = "";
  image.value = "";
  theme.value = "purple";
  seoTitle.value = "";
  seoDesc.value = "";
  published.value = "true";
  content.value = "";

  previewMarkdown();
  renderList();
}

/* -------------------------
   SAVE / DELETE
-------------------------- */
function save() {
  const entry = {
    id: id.value,
    title: title.value,
    subtitle: subtitle.value,
    image: image.value,
    theme: theme.value,
    seo: {
      title: seoTitle.value,
      description: seoDesc.value
    },
    content: content.value,
    published: published.value === "true"
  };

  if (current === null) {
    data.push(entry);
    current = data.length - 1;
  } else {
    data[current] = entry;
  }

  saveStorage();
  renderList();
}

function remove() {
  if (current === null) return;
  data.splice(current, 1);
  current = null;
  saveStorage();
  newEntry();
  renderList();
}

/* -------------------------
   UTILITIES
-------------------------- */
function saveStorage() {
  localStorage.setItem(KEY, JSON.stringify(data));
}

function exportJson() {
  document.getElementById("output").textContent =
    JSON.stringify(data, null, 2);
}

function previewMarkdown() {
  preview.innerHTML = marked.parse(content.value || "");
}

content.addEventListener("input", previewMarkdown);

/* -------------------------
   START APP
-------------------------- */
init();
