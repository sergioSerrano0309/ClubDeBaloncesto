window.onload = function(){
    document.getElementById("tema").addEventListener("click", modoOscuro);
    document.getElementById("idioma").addEventListener("change", cambiarIdioma);
}
function modoOscuro() {
    var body = document.body;
    var usuario = document.getElementById("usuario");
    var contraseña = document.getElementById("contraseña");
    var botonTema  = document.getElementById("tema");
    var oscuro = botonTema.getAttribute("oscuro");
    var form = document.getElementById("form");
    var modal = document.getElementById("exampleModal");
    if(oscuro == "false"){
        document.cookie = "tema=oscuro; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
        body.style.backgroundColor = "#002b47";
        botonTema.setAttribute("oscuro", "true");
        botonTema.innerHTML = '<i class="fa-solid fa-moon"></i>';
        usuario.style.backgroundColor = "#002b47";
        usuario.style.borderColor = "#002b47";
        usuario.style.color = "white";
        contraseña.style.backgroundColor = "#002b47";
        contraseña.style.borderColor = "#002b47";
        contraseña.style.color = "white";
        form.style.backgroundColor = "rgba(23, 57, 97, 0.95)";
        modal.setAttribute("data-bs-theme","dark");
        modal.style.color="white";

    } else if(oscuro == "true"){
        document.cookie = "tema=claro; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
        body.style.backgroundColor = "#c4e0ff";
        botonTema.setAttribute("oscuro", "false");
        botonTema.innerHTML = '<i class="fa-solid fa-sun"></i>';
        usuario.style.backgroundColor = "#ffff";
        usuario.style.borderColor = "#ffff";
        usuario.style.color = "black";
        contraseña.style.backgroundColor = "#ffff";
        contraseña.style.borderColor = "#ffff";
        contraseña.style.color = "black";
        form.style.backgroundColor = "rgba(65, 154, 255, 0.95)";
        modal.setAttribute("data-bs-theme","light");
        modal.style.color="black";
    }
    
}

function cambiarIdioma() {
    var idiomaSeleccionado = document.getElementById("idioma").value;
    if (idiomaSeleccionado === "es") {
      document.getElementById("user").innerHTML = "Nombre de usuario";
      document.getElementById("password").innerHTML = "Contraseña";
      document.getElementById("confirmar").value = "Confirmar";
      document.getElementById("ajustes").innerHTML = "Ajustes";
      document.getElementById("close").innerHTML = "Cerrar"; 
      document.getElementById("setting1").innerHTML = "Tema:";
      document.getElementById("setting2").innerHTML = "<br>Lenguaje:";
      document.getElementById("setting21").innerHTML = "Castellano";
      document.getElementById("setting22").innerHTML = "Inglés";
      document.getElementById("setting23").innerHTML = "Catalán"; 
      document.getElementById("confirmarAficionado").innerHTML = "Entrar como Aficionado"; 
    } else if (idiomaSeleccionado === "en") {
        document.getElementById("user").innerHTML = "Username";
        document.getElementById("password").innerHTML = "Password";
        document.getElementById("confirmar").value = "Confirm";
        document.getElementById("ajustes").innerHTML = "Settings";
        document.getElementById("close").innerHTML = "Close";
        document.getElementById("setting1").innerHTML = "Theme:";
        document.getElementById("setting2").innerHTML = "<br>Language:";
        document.getElementById("setting21").innerHTML = "Spanish";
        document.getElementById("setting22").innerHTML = "English";
        document.getElementById("setting23").innerHTML = "Catalan"; 
        document.getElementById("confirmarAficionado").innerHTML = "Enter as fan";
    } else if (idiomaSeleccionado === "ca") {
        document.getElementById("user").innerHTML = "Nom d'usuari";
        document.getElementById("password").innerHTML = "Contrasenya";
        document.getElementById("confirmar").value = "Confirmar";
        document.getElementById("ajustes").innerHTML = "Ajustaments";
        document.getElementById("close").innerHTML = "Tancar";
        document.getElementById("setting1").innerHTML = "Tema:";
        document.getElementById("setting2").innerHTML = "<br>Llenguatje:";
        document.getElementById("setting21").innerHTML = "Castellà";
        document.getElementById("setting22").innerHTML = "Anglès";
        document.getElementById("setting23").innerHTML = "Català"; 
        document.getElementById("confirmarAficionado").innerHTML = "Entrar com aficionat";
    }
  }
