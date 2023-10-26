const d = document;
export default function darkTheme(btn, classDark) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]"),
    $selectoresW = d.querySelector("[data-darkW]");
  console.log($selectors);
  let moon = "🌙",
    sun = "☀️";
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      $selectors.forEach((el) => el.classList.toggle(classDark));
      $selectoresW.classList.toggle("dark-modeW")
      if($themeBtn.textContent === moon){
        $themeBtn.textContent = sun;
      }else{
        $themeBtn.textContent = moon;
      }
      
    }
  });
}
