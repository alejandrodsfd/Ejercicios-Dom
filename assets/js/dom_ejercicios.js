import scrollTopButton from "./botton_scroll.js";
import slider from "./carrusel.js";
import countDown from "./cuenta_regresiva.js";
import darkTheme from "./dark-theme.js";
import userDeviceInfo from "./deteccion_dispositivo.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import searchFilters from "./filtro_busquedas.js";
import getGeolocation from "./geolocalizacion.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import speechReader from "./narrador.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import { digitalClock, alarm } from "./reloj.js";
import scrollSpy from "./scroll_spia.js";
import draw from "./sorteo.js";
import { shortcuts, moveBall } from "./teclado.js";
import contactFormValidations from "./validaciones-formulario.js";
import smartVideo from "./video_inteligente.js";
const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#iniciar-reloj", "#detener-reloj");
  alarm("assets/sonidos/alarma.mp3", "#iniciar-alarma", "#detener-alarma");
  countDown(
    "countdown",
    "Nov 17, 2023, 00:00:00",
    "Feliz Cumpleaños papasito rico"
  );
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=92" target="_blank">Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc?si=oD0h1iQSFIJSMx_A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://maps.app.goo.gl/n8EqtcjthGmkViqq9" target="_blank">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.3308153642424!2d-99.16888681136565!3d19.427020595462754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2sco!4v1698333706177!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );

  responsiveTester("responsive-tester")
  userDeviceInfo("user-device")
  webCam("webcam")
  getGeolocation("geolocation")
  searchFilters(".card-filter", ".card")
  draw("#winner-btn", ".player")
  slider()
  scrollSpy()
  smartVideo()
  contactFormValidations()
  
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus()
speechReader()