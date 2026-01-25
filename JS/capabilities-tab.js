const menuItems = document.querySelectorAll('.cap-menu li');
const groups = document.querySelectorAll('.stack-group');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    const target = item.dataset.target;

    // menu state
    menuItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    // stack switch
    groups.forEach(g => {
      g.classList.remove('active');
      if (g.dataset.group === target) {
        g.classList.add('active');
      }
    });
  });
});