gsap.from(".hero-left > *",{
    y:28,
    opacity:0,
    stagger:0.14,
    duration:0.9,
    ease:"power3.out"
  });
  
  gsap.from(".hero-image",{
    scale:0.95,
    opacity:0,
    duration:0.9,
    delay:0.35,
    ease:"power3.out"
  });
  
  gsap.from(".shape",{
    scale:0,
    opacity:0,
    stagger:0.18,
    duration:0.7,
    delay:0.55,
    ease:"back.out(1.5)"
  });