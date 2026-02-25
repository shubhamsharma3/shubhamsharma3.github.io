/* ============================================
   CASE STUDY + MARKDOWN ROUTER (FULL SAFE SPA)
   ============================================ */

document.addEventListener("DOMContentLoaded", router);
window.addEventListener("popstate", router);


/* ============================================
   MAIN ROUTER
   ============================================ */

async function router(){

  const params = new URLSearchParams(window.location.search);

  const id = params.get("id");
  const view = params.get("view");

  if(id){

    hideHomepage();
    await renderCaseStudy(id);
    return;

  }

  if(view === "resume"){

    hideHomepage();
    await renderMarkdown("data/resume.md");
    return;

  }

  if(view === "philosophy"){

    hideHomepage();
    await renderMarkdown("data/philosophy.md");
    return;

  }

  // DEFAULT STATE → HOMEPAGE
  showHomepage();

}


/* ============================================
   RENDER CASE STUDY
   ============================================ */

async function renderCaseStudy(id){

  const container =
    document.getElementById("case-study-container");

  container.innerHTML = "<div class='case-study-page'>Loading...</div>";

  try{

    const res = await fetch("data/works.json");
    const works = await res.json();

    const work = works.find(w => w.id === id);

    if(!work){

      container.innerHTML =
        "<div class='case-study-page'>Case study not found.</div>";

      return;
    }

    const mdRes =
      await fetch(work.contentFile);

    const markdown =
      await mdRes.text();

    const html =
      marked.parse(markdown);

    container.innerHTML =
    `
    <div class="case-study-page">

      <div class="case-study-wrapper">

        <a href="#"
           class="case-back-btn"
           onclick="goHome(event)">
           ← Back to Portfolio
        </a>

        <div class="case-study-content">
          ${html}
        </div>

      </div>

    </div>
    `;

    window.scrollTo(0,0);

  }
  catch(err){

    container.innerHTML =
      "<div class='case-study-page'>Error loading case study.</div>";

    console.error(err);

  }

}


/* ============================================
   RENDER MARKDOWN (RESUME / PHILOSOPHY)
   ============================================ */

async function renderMarkdown(path){

  const container =
    document.getElementById("case-study-container");

  container.innerHTML =
    "<div class='case-study-page'>Loading...</div>";

  try{

    const res = await fetch(path);

    const markdown =
      await res.text();

    const html =
      marked.parse(markdown);

    container.innerHTML =
    `
    <div class="case-study-page">

      <div class="case-study-wrapper">

        <a href="#"
           class="case-back-btn"
           onclick="goHome(event)">
           ← Back
        </a>

        <div class="case-study-content">
          ${html}
        </div>

      </div>

    </div>
    `;

    window.scrollTo(0,0);

  }
  catch(err){

    container.innerHTML =
      "<div class='case-study-page'>Error loading content.</div>";

    console.error(err);

  }

}


/* ============================================
   NAVIGATION HELPERS
   ============================================ */

function hideHomepage(){

  document.querySelectorAll("section, footer")
    .forEach(el => el.style.display = "none");

}


function showHomepage(){

  document.querySelectorAll("section, footer")
    .forEach(el => el.style.display = "");

  const container =
    document.getElementById("case-study-container");

  container.innerHTML = "";

}


/* ============================================
   BACK TO PORTFOLIO
   ============================================ */

function goHome(event){

  event.preventDefault();

  const params = new URLSearchParams(window.location.search);

  const id = params.get("id");
  const view = params.get("view");

  // Reset URL
  window.history.pushState({}, "", "index.html");

  // Restore homepage
  showHomepage();

  // CASE STUDY → go to portfolio
  if(id){

    const portfolio =
      document.getElementById("portfolio");

    if(portfolio){

      portfolio.scrollIntoView({
        behavior: "smooth"
      });

    }

    return;
  }

  // RESUME or PHILOSOPHY → go to top of homepage
  if(view === "resume" || view === "philosophy"){

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    return;
  }

}


/* ============================================
   GLOBAL NAV SUPPORT (Navbar links fix)
   ============================================ */

document.addEventListener("click", function(e){

  const link = e.target.closest("a");

  if(!link) return;

  const href = link.getAttribute("href");

  if(!href) return;

  // Only intercept internal navigation
  if(
    href === "#home" ||
    href === "#portfolio" ||
    href === "#experience" ||
    href === "#contact"
  ){

    e.preventDefault();

    window.history.pushState({}, "", "index.html");

    showHomepage();

    const target =
      document.querySelector(href);

    if(target){

      target.scrollIntoView({
        behavior:"smooth"
      });

    }

  }

});