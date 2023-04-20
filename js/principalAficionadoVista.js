window.onload = function(){
    document.getElementById("tema").addEventListener("click", modoOscuro);
    document.getElementById("idioma").addEventListener("change", cambiarIdioma);
}
function modoOscuro() {
    var body = document.body;
    var botonTema  = document.getElementById("tema");
    var oscuro = botonTema.getAttribute("oscuro");
    var modal = document.getElementById("exampleModal");
    var cajaTitulo = document.getElementById("cajaTitulo");
    if(oscuro == "false"){
        document.cookie = "tema=oscuro; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
        body.style.backgroundColor = "#002b47";
        botonTema.setAttribute("oscuro", "true");
        botonTema.innerHTML = '<i class="fa-solid fa-moon"></i>';
        modal.setAttribute("data-bs-theme","dark");
        modal.style.color="white";
        cajaTitulo.style.backgroundColor = "#03395e";
        cajaTitulo.style.color = "white";
    } else if(oscuro == "true"){
        document.cookie = "tema=claro; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
        body.style.backgroundColor = "#c4e0ff";
        botonTema.setAttribute("oscuro", "false");
        botonTema.innerHTML = '<i class="fa-solid fa-sun"></i>';
        modal.setAttribute("data-bs-theme","light");
        modal.style.color="black";
        cajaTitulo.style.backgroundColor = "rgba(65, 154, 255, 0.95)";
        cajaTitulo.style.color = "black";
    }
    
}

function cambiarIdioma() {
    var idiomaSeleccionado = document.getElementById("idioma").value;
    if (idiomaSeleccionado === "es") {
        document.getElementById("titulo").innerHTML = "Bienvenido al Club de Baloncesto";
      
    } else if (idiomaSeleccionado === "en") {
        document.getElementById("titulo").innerHTML = "Welcome to the basketball club";
        
    } else if (idiomaSeleccionado === "ca") {
        document.getElementById("titulo").innerHTML = "Benvingut al Club de Bàsquet";
        
    }
  }