<?php

require("../Controladores/controladorUsuarios.php");

function test_alta_usuario()
{
    $u = new UsuarioAccesoDatos();
    return $u->insertar('sergioAficionado','sergio@serrano.com','serrano9', 'aficionado');
}

/* function test_verificar_usuario_encontrado()
{
    $perfil_esperado = 'jugador';
    $u = new UsuarioAccesoDatos();
    $perfil = $u->verificar('alex','passwordalex');
    return $perfil === $perfil_esperado;
}

function test_alta_admin()
{
    $u = new UsuarioAccesoDatos();
    return $u->insertar('sergio','administrador','serrano9');
} */

var_dump(test_alta_usuario());
