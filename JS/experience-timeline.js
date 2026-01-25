gsap.utils.toArray(".exp-item").forEach((item) => {
    const line = item.querySelector(".exp-line");
    const dot = item.querySelector(".exp-dot");
    const content = item.querySelector(".exp-content");
  
    // 1️⃣ Measure content height
    const contentHeight = content.offsetHeight;
  
    // 2️⃣ Apply real pixel height to line
    gsap.set(line, {
      height: contentHeight
    });
  
    // 3️⃣ Dot activation
    gsap.to(dot, {
      scale: 1,
    duration: 0.22,
    ease: "power2.out",
      boxShadow: "0 0 0 10px rgba(11,58,42,0.15)",
    duration: 0.22,
    ease: "power2.out",
      scrollTrigger: {
        trigger: content,
        start: "top 45%",
        toggleActions: "play none none reverse"
      }
    });
  
    // 4️⃣ Progressive line fill (SCRUBBED)
    gsap.to(line, {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: content,
        start: "top 45%",
        end: "bottom 45%",
        scrub: true
      }
    });
  });