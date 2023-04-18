<?php
$error = false;
ini_set('display_errors', 'On');
ini_set('html_errors', 0);
require ("../Negocio/NegocioUsuarios.php");

if ($_SERVER["REQUEST_METHOD"]=="POST")
{
    
    $usuarioBL = new UsuarioReglasNegocio();
    $perfil =  $usuarioBL->verificar($_POST['usuario'],$_POST['contraseña']);

    if ($perfil==="administrador")
    {
        
        session_start(); 
        $_SESSION['usuario'] = $_POST['usuario'];
        header("Location: principalAdminVista.php");
    }
    else if($perfil==="aficionado")
    {
        session_start(); 
        $_SESSION['usuario'] = $_POST['usuario'];
        header("Location: principalAficionadoVista.php");
    }
    else
    {
        $error = true;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../../css/loginVista.css">
</head>
<body>
    <div class="cajaSesión">
    <form method = "POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label for="Usuario">Nombre de usuario</label><br><br>
        <input type="text" id="usuario" name="usuario" value=""><br><br>
        <label for="Contraseña">Contraseña</label><br><br>
        <input type="password" id="contraseña" name="contraseña" value=""><br><br>
        <input class="boton" type="submit" value="Confirmar">
        <?php 
        if($error == true)
        {
            echo "<p class='error' style='color:red'>Error al iniciar sesión</p>";
        } 
        ?>
    </form> 
       <button id="settings" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="fa-solid fa-gear"></i>
        </button>


        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Ajustes</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p style="display: inline;">Tema : <button style="display: inline;" id="tema" oscuro="false" class="tema" ><i class="fa-solid fa-sun"></i></button></p> 
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
        </div>
    </div>
    </div>
</body>
</html>
