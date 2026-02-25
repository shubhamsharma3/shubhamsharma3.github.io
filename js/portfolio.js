document.addEventListener("DOMContentLoaded", initPortfolio);
window.addEventListener("hashchange", animatePortfolio);

let worksCache = [];

async function initPortfolio(){

const res = await fetch("data/works.json");
worksCache = await res.json();

renderPortfolio(false);

}

function animatePortfolio(){

const wrapper = document.getElementById("portfolio-grid-wrapper");
const grid = document.getElementById("portfolio-grid");

// measure current height
const startHeight = wrapper.offsetHeight;

wrapper.style.height = startHeight + "px";

// fade out
grid.classList.add("fading");

setTimeout(()=>{

renderPortfolio(true);

// measure new height
const newHeight = wrapper.scrollHeight;

wrapper.style.height = newHeight + "px";

// fade in
grid.classList.remove("fading");

// reset height after animation
setTimeout(()=>{
wrapper.style.height = "auto";
},500);

},250);

}

function renderPortfolio(scroll){

const grid = document.getElementById("portfolio-grid");
const footer = document.querySelector(".portfolio-footer");

const isFull = window.location.hash === "#portfolio-full";

const worksToShow = isFull ? worksCache : worksCache.slice(0,3);

grid.innerHTML = worksToShow.map(work => `
<div class="portfolio-card fade-up">

<div class="portfolio-image">
<img src="${work.image}">
</div>

<div class="portfolio-content">

<h3>${work.title}</h3>

<p>${work.subtitle}</p>

<button class="portfolio-btn"
onclick="location.href='index.html?id=${work.id}'">
View Project →
</button>

</div>

</div>
`).join("");

footer.innerHTML = isFull
? `<button class="primary-btn" onclick="location.hash='portfolio'">View Less</button>`
: `<button class="primary-btn" onclick="location.hash='portfolio-full'">View Full Portfolio</button>`;

if(scroll){
document.getElementById("portfolio")
.scrollIntoView({behavior:"smooth"});
}

}