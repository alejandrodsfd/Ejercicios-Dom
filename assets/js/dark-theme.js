const d = document,
  ls = localStorage;
export default function darkTheme(btn, classDark) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]"),
    $selectoresW = d.querySelector("[data-darkW]"),
    $svLoader = d.querySelector(".contact-form-loader svg")
  // console.log($selectors);
  let moon = "🌙",
    sun = "☀️";
  const darkMode = () => {
      $selectors.forEach((el) => el.classList.add(classDark));
      $selectoresW.classList.add("dark-modeW");
      $themeBtn.textContent = sun;
      ls.setItem("theme", "dark");
      $svLoader.classList.add("color-svg")
    },
    lightMode = () => {
      $selectors.forEach((el) => el.classList.remove(classDark));
      $themeBtn.textContent = moon;
      $selectoresW.classList.remove("dark-modeW");
      ls.setItem("theme", "light");
      $svLoader.classList.remove("color-svg")
    };
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });
  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    if (ls.getItem("theme") === "light") lightMode();
    if (ls.getItem("theme") === "dark") darkMode();
  });
}
