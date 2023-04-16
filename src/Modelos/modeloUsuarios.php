<?php

require("../Controladores/controladorUsuarios.php");

class UsuarioReglasNegocio
{

	function __construct()
    {
    }

    function verificar($usuario, $contraseña)
    {
        $usuariosDAL = new UsuarioAccesoDatos();
        $res = $usuariosDAL->verificar($usuario,$contraseña);
        
        return $res;
        
    }

    function insertar($usuario, $correo, $contraseña, $tipoUsuario)
    {
        if(strlen($clave) >= 8)
        {
        $usuariosDAL = new UsuarioAccesoDatos();
        $res = $usuariosDAL->insertar($usuario, $correo, $contraseña, $tipoUsuario);
        }
        return $res;
    }
}