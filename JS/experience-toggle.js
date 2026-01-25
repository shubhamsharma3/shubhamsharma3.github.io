document.querySelectorAll(".exp-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".exp-item");
      const isExpanded = item.classList.contains("expanded");
  
      // Toggle state
      item.classList.toggle("expanded");
  
      // Button text
      btn.textContent = isExpanded ? "Read more →" : "Hide ↑";
  
      // 🔑 Recalculate timeline height + ScrollTrigger
      ScrollTrigger.refresh();
    });
  });