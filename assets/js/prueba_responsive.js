const d = document;
let tester;

export default function responsiveTester(form) {
  const $form = d.getElementById(form);

  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      tester = window.open(
        $form.direccion.value,
        "tester",
        `innerWidth=${$form.ancho.value},innerHeight=${$form.alto.value}`
      );
      console.log(tester);
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target === $form.cerrar) {
      console.log(tester);
      tester.close();
    }
  });
}
