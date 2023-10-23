import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#iniciar-reloj", "#detener-reloj")
  alarm("assets/sonidos/alarma.mp3","#iniciar-alarma", "#detener-alarma")
});

