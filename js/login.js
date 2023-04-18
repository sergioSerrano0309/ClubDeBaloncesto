function modoOscuro() {
    var body = document.body;
    var botonTema  = document.getElementById("tema");
    var oscuro = botonTema.getAttribute("oscuro")
    if(oscuro == "false"){
        body.style.backgroundColor = "#002b47";
        botonTema.setAttribute("oscuro", "true");
        botonTema.innerHTML = '<i class="fa-solid fa-sun"></i>';

    } else if(oscuro == "true"){
        body.style.backgroundColor = "#c4e0ff";
        botonTema.setAttribute("oscuro", "false");
        botonTema.innerHTML = '<i class="fa-solid fa-moon"></i>';


    }
    
}