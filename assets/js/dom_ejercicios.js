import countDown from "./cuenta_regresiva.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { shortcuts, moveBall } from "./teclado.js";
const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#iniciar-reloj", "#detener-reloj");
  alarm("assets/sonidos/alarma.mp3", "#iniciar-alarma", "#detener-alarma");
  countDown("countdown", "Nov 17, 2023, 00:00:00", "Feliz Cumpleaños papasito rico");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
