<!DOCTYPE html>
<html>
<head>
    <title>Club de Baloncesto</title>
    <script src="https://kit.fontawesome.com/5057522511.js" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <script src="principalAficionadoVista.js" ></script>
    <link rel="stylesheet" href="principalAficionadoVista.css">
</head>
<body>
    <div id="cajaTitulo" class="container">
        <h1 class="titulo" id="titulo">Bienvenido al Club de Baloncesto</h1>
        <p>¡Descubre todo lo que tenemos para ofrecerte!</p>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="..." class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
    </div>
    
    <div id="contenedor">
      <div id="componentesI" class="claro">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In magni cum, temporibus enim ipsum commodi natus dicta libero blanditiis earum velit reprehenderit repellat alias. Sequi sunt, recusandae vel vero dolore soluta debitis quod quas non dolorum facilis libero necessitatibus, iste, doloremque fugit illum id fugiat placeat iure quos qui. Officiis ipsa fugiat, veniam illum aliquam magni animi pariatur ratione illo possimus sit unde architecto quo fuga autem voluptate distinctio impedit a consequatur. Dolores id autem impedit numquam excepturi? Sapiente dolorem minus reprehenderit consectetur doloribus, laborum nisi mollitia optio dignissimos ipsum. Sit nobis repellendus ad vero a explicabo animi omnis asperiores?
      </div>
      <div id="componentesD" class="claro">
        
      </div>
    </div>

    <button id="settings" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i class="fa-solid fa-gear"></i>
    </button>
    
    
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content ">
            <div class="modal-header">
            <h1 id="ajustes" class="modal-title fs-5" id="exampleModalLabel">Ajustes</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body ">
                <p id="setting1" class="setting">Tema : </p> <button style="margin-bottom: 10px;" id="tema" oscuro="false" class="tema" ><i class="fa-solid fa-sun"></i></button>
                <p id="setting2" class="setting"><br>Lenguaje: </p> <select id="idioma" style="display: inline;"><option id="setting21" value="es">Castellano</option><option id="setting22" value="en">Inglés</option><option id="setting23" value="ca">Catalán</option></select>
                
            </div>
            <div class="modal-footer">
            <button id="close" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
        </div>
        </div>
    </div>
    </div>
</body>
</html>
