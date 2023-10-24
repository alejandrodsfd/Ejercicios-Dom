const d = document;

export function shortcuts(e) {
  console.log(e);
  console.log(e.type);
  console.log(e.key);
  console.log(e.keyCode);

  if(e.key === "a" && e.altKey){
    alert("haz lanzado una alerta")
  }
  if(e.key === "c" && e.altKey){
    confirm("haz lanzado una confirmacion")
  }
  if(e.key === "p" && e.altKey){
    prompt("haz lanzado un aviso")
  }
}
