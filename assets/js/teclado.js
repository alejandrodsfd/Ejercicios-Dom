const d = document;
let x = 0,
  y = 0;
export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitBall = $ball.getBoundingClientRect(),
    limitStage = $stage.getBoundingClientRect();
  console.log(limitBall, limitStage)
  console.log(e.keyCode);
  switch (e.keyCode) {
    // izquierda
    case 37:
      e.preventDefault();
      if(limitBall.left > limitStage.left)x--;
      break;
    // arriba
    case 38:
      e.preventDefault();
      if(limitBall.top > limitStage.top)y--;
      break;
    // derecha
    case 39:
      e.preventDefault();
      if(limitBall.right < limitStage.right)x++;
      break;
    // abajo
    case 40:
      e.preventDefault();
      if(limitBall.bottom < limitStage.bottom)y++;
      break;

    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}
export function shortcuts(e) {
  console.log(e);
  console.log(e.type);
  console.log(e.key);
  console.log(e.keyCode);

  if (e.key === "a" && e.altKey) {
    alert("haz lanzado una alerta");
  }
  if (e.key === "c" && e.altKey) {
    confirm("haz lanzado una confirmacion");
  }
  if (e.key === "p" && e.altKey) {
    prompt("haz lanzado un aviso");
  }
}
