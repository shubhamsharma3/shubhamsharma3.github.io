fetch("data/works.json")
  .then(res => res.json())
  .then(works => {
    const grid = document.getElementById("worksGrid");

    works
      .filter(work => work.published)
      .forEach(work => {
        const card = document.createElement("a");
        card.href = `case-study.html?id=${work.id}`;
        card.className = `work-card ${work.theme}`;

        card.innerHTML = `
          <div class="work-image">
            <img src="${work.image}" alt="${work.title}">
          </div>
          <div class="work-info">
            <h3>${work.title}</h3>
            <span>${work.subtitle}</span>
          </div>
        `;

        grid.appendChild(card);
      });
  });
