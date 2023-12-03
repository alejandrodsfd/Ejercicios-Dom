(() => {
  // PRIMERO SE INSTANCIAmosS UNA VARIABLE U OBJETO XMLHTTPRequest
  const xhr = new XMLHttpRequest(), // objeto ajax,
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

    
    // Asignarle el o los eventos que vayamos a estar manipulando de la peticion 
    xhr.addEventListener("readystatechange", e => {
      if(xhr.readyState !== 4) return;
      console.log(xhr)
      if(xhr.status >= 200 && xhr.status < 300){
        console.log("ÉXITO")
        // console.table(xhr.responseText)
        // $xhr.innerHTML = xhr.responseText
        let json = JSON.parse(xhr.responseText)
        console.log(json)
        json.forEach(el => {
          const $li = document.createElement("li");
          $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
          $fragment.appendChild($li)
        })

        $xhr.appendChild($fragment)
      }else{
        console.log("ERROR")
        let message = xhr.statusText || "Page no found";
        $xhr.innerHTML = `Error ${xhr.status}: ${message} `
      }
      console.log("Este mensaje cargara de cualquier forma")
    })

    // Abrir la peticion, establecer el metodo en el que lo vamos a hacer y el recurso o la url o endpoint
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users")

    // y finalmente se envia la peticion con el metodo send
    xhr.send();
})();

