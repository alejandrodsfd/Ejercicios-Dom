const d = document;
let x = 0,
  y = 0;
export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitBall = $ball.getBoundingClientRect(),
    limitStage = $stage.getBoundingClientRect();
  // console.log(limitBall, limitStage)
  // console.log(e.keyCode);
  switch (e.keyCode) {
    // izquierda
    case 37:
      if(Math.round(limitBall.left) - 5 > Math.round(limitStage.left)){
        e.preventDefault();
        x--;
      }
      break;
    // arriba
    case 38:
      if(Math.round(limitBall.top) - 5 > Math.round(limitStage.top)){
        e.preventDefault();
        y--;
      }
      break;
    // derecha
    case 39:
      if(Math.round(limitBall.right) + 5 < Math.round(limitStage.right)){
        x++;
        e.preventDefault();
      }
      break;
    // abajo
    case 40:
      if(Math.round(limitBall.bottom) + 5 < Math.round(limitStage.bottom)){
        e.preventDefault();
        y++;
        
      }
      break;

    default:
      break;
  }
  $ball.style.transform = `translate(${x * 8}px, ${y * 8}px)`;
}
export function shortcuts(e) {
  // console.log(e);
  // console.log(e.type);
  // console.log(e.key);
  // console.log(e.keyCode);

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
