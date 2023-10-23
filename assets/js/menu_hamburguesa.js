export default function hamburgerMenu(panelBtn, panel, menuA) {
  const d = document;
  d.addEventListener("click", (e) => {
    if (
      e.target.matches(panelBtn) ||
      e.target.matches(`${panelBtn} *`) ||
      e.target.matches(menuA)
    ) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }
  });
}
