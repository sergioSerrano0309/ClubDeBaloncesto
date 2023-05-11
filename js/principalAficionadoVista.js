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
        componentesI.setAttribute("class", "oscuro");
        componentesD.setAttribute("class", "oscuro");
    } else if(oscuro == "true"){
        document.cookie = "tema=claro; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
        body.style.backgroundColor = "#c4e0ff";
        botonTema.setAttribute("oscuro", "false");
        botonTema.innerHTML = '<i class="fa-solid fa-sun"></i>';
        modal.setAttribute("data-bs-theme","light");
        modal.style.color="black";
        cajaTitulo.style.backgroundColor = "rgba(65, 154, 255, 0.95)";
        cajaTitulo.style.color = "black";
        componentesI.setAttribute("class", "claro");
        componentesD.setAttribute("class", "claro");
    }
    
}

function cambiarIdioma() {
    var idiomaSeleccionado = document.getElementById("idioma").value;
    if (idiomaSeleccionado === "es") {
        document.getElementById("titulo").innerHTML = "Bienvenido al Club de Baloncesto";
        document.getElementById("ajustes").innerHTML = "Ajustes";
        document.getElementById("close").innerHTML = "Cerrar"; 
        document.getElementById("setting1").innerHTML = "Tema:";
        document.getElementById("setting2").innerHTML = "<br>Lenguaje:";
        document.getElementById("setting21").innerHTML = "Castellano";
        document.getElementById("setting22").innerHTML = "Inglés";
        document.getElementById("setting23").innerHTML = "Catalán";
        
    } else if (idiomaSeleccionado === "en") {
        document.getElementById("titulo").innerHTML = "Welcome to the basketball club";
        document.getElementById("ajustes").innerHTML = "Settings";
        document.getElementById("close").innerHTML = "Close";
        document.getElementById("setting1").innerHTML = "Theme:";
        document.getElementById("setting2").innerHTML = "<br>Language:";
        document.getElementById("setting21").innerHTML = "Spanish";
        document.getElementById("setting22").innerHTML = "English";
        document.getElementById("setting23").innerHTML = "Catalan";
        
    } else if (idiomaSeleccionado === "ca") {
        document.getElementById("titulo").innerHTML = "Benvingut al Club de Bàsquet";
        document.getElementById("ajustes").innerHTML = "Ajustaments";
        document.getElementById("close").innerHTML = "Tancar";
        document.getElementById("setting1").innerHTML = "Tema:";
        document.getElementById("setting2").innerHTML = "<br>Llenguatje:";
        document.getElementById("setting21").innerHTML = "Castellà";
        document.getElementById("setting22").innerHTML = "Anglès";
        document.getElementById("setting23").innerHTML = "Català";

        
    }
  }
