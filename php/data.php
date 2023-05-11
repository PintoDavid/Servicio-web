<?php
//    echo "Hello World!";
//SIEMRPE USAR SIGNO "$"

//TOMAMOS EL OBJETO O ELEMTENTO DEL FORMULARIO
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$codigo = $_POST['codigo'];
$email = $_POST['email'];
$password = $_POST['password'];
//$rol = $_POST['rol'];

//LO MANDAMOS A LA BASE DE DATOS


//COMANDOS SQL
//REVISAR DOCUMENTACION - MySQLi (ver7,ver8)
//INFORMACION EN LA PAGINA HOST
$mysqli = new mysqli("sql109.epizy.com","epiz_34136912","idLq75EJ6FO","epiz_34136912_users");

$sql = "INSERT INTO `user` (nombre, apellido, codigo, email, password) VALUES ('".$nombre."', '".$apellido."', '".$codigo."', '".$email."', '".md5($password)."')";

// Check connection
if ($mysqli->query($sql)=== TRUE) {
    echo "New record create successfully";
    }else{
        echo "Error: " . $sql . "<br>" .$conn->error;
    }

$mysqli>close();

?>