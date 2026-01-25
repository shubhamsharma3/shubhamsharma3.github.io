document.getElementById("workForm").addEventListener("submit", e => {
    e.preventDefault();
  
    const work = {
      id: crypto.randomUUID(),
      title: title.value,
      subtitle: subtitle.value,
      image: image.value,
      theme: theme.value,
      link: link.value || "#"
    };
  
    document.getElementById("output").textContent =
      JSON.stringify(work, null, 2);
  });
  