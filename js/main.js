// SCROLL REVEAL

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.2});

cards.forEach(card=>observer.observe(card));



// ADVANCED MOUSE PARALLAX

const container = document.querySelector(".parallax-container");

const layers = document.querySelectorAll(".parallax-layer");

container.addEventListener("mousemove",(e)=>{

const rect = container.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const centerX = rect.width / 2;
const centerY = rect.height / 2;

const moveX = (x - centerX) / centerX;
const moveY = (y - centerY) / centerY;

layers.forEach(layer=>{

const speed = layer.getAttribute("data-speed");

const translateX = moveX * speed * 40;
const translateY = moveY * speed * 40;

layer.style.transform =
`translate(${translateX}px, ${translateY}px)`;

});

});


// RESET when mouse leaves

container.addEventListener("mouseleave",()=>{

layers.forEach(layer=>{

layer.style.transform = "translate(0px,0px)";

});

});


/* ================= NAVBAR SCROLL EFFECT ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 40){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});



// Navbar about me menu

// DROPDOWN TOGGLE

const dropdown = document.querySelector('.nav-dropdown');
const toggle = document.querySelector('.nav-dropdown-toggle');

toggle.addEventListener('click', function(e){

e.stopPropagation();

dropdown.classList.toggle('open');

});


// CLOSE when clicking outside

document.addEventListener('click', function(){

dropdown.classList.remove('open');

});


// PREVENT CLOSE when clicking inside menu

document.querySelector('.nav-dropdown-menu')
.addEventListener('click', function(e){

e.stopPropagation();

});