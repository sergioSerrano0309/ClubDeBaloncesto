window.onload = function(){
    document.getElementById("tema").addEventListener("click", modoOscuro);
}
function modoOscuro() {
    var body = document.body;
    var usuario = document.getElementById("usuario");
    var contraseña = document.getElementById("contraseña");
    var botonTema  = document.getElementById("tema");
    var oscuro = botonTema.getAttribute("oscuro");
    var form = document.getElementById("form");

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
    }
    
}
