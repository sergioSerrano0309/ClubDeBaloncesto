<?php

class UsuarioAccesoDatos
{
	
	function __construct()
    {
    }

    function verificar($usuario,$clave)
    {
        $conexion = mysqli_connect('127.0.0.1','root','12345');
		if (mysqli_connect_errno())
		{
				echo "Error al conectar a MySQL: ". mysqli_connect_error();
		}
        mysqli_select_db($conexion, 'club_de_baloncesto');
        $consulta = mysqli_prepare($conexion, "select nombre_usuario,tipo_usuario,contraseña from Usuarios where nombre_usuario = ?;");
        $sanitized_usuario = mysqli_real_escape_string($conexion, $usuario);       
        $consulta->bind_param("s", $sanitized_usuario);
        $consulta->execute();
        $res = $consulta->get_result();


        if ($res->num_rows==0)
        {
            return 'NOT_FOUND';
        }

        if ($res->num_rows>1) //El nombre de usuario debería ser único.
        {
            return 'NOT_FOUND';
        }

        $myrow = $res->fetch_assoc();
        $x = $myrow['contraseña'];
        if (password_verify($clave, $x))
        {
            return $myrow['tipo_usuario'];
        } 
        else 
        {
            return 'NOT_FOUND';
        }
    }

    function insertar($usuario,$correo,$contraseña,$tipoUsuario)
	{
		$conexion = mysqli_connect('127.0.0.1','root','12345');
		if (mysqli_connect_errno())
		{
				echo "Error al conectar a MySQL: ". mysqli_connect_error();
		}
 		
        
        mysqli_select_db($conexion, 'club_de_baloncesto');
		$consulta = mysqli_prepare($conexion, "insert into usuarios(nombre_usuario, correo_electronico, contraseña, tipo_usuario) values (?,?,?,?);");
        $hash = password_hash($contraseña, PASSWORD_DEFAULT);
        $consulta->bind_param("ssss", $usuario,$correo,$hash,$tipoUsuario);
        $res = $consulta->execute();
        
		return $res;
	}

}