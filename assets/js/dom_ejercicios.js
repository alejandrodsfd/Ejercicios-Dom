import scrollTopButton from "./botton_scroll.js";
import countDown from "./cuenta_regresiva.js";
import darkTheme from "./dark-theme.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { shortcuts, moveBall } from "./teclado.js";
const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#iniciar-reloj", "#detener-reloj");
  alarm("assets/sonidos/alarma.mp3", "#iniciar-alarma", "#detener-alarma");
  countDown("countdown", "Nov 17, 2023, 00:00:00", "Feliz Cumpleaños papasito rico");
  scrollTopButton(".scroll-top-btn")
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode")