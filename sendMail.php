<?php

$para = "buscoplay@gmail.com";
$nome = $_POST["nome"];
$email = $_POST["email"];
$menssagem = $_POST["menssagem"];
$texto = $_POST["text"];
$headers = "From: ".$email."\r\n"."Reply-to: ".$para."\r\n"."X-Mailer: PHP/".phpversion();

$enviar = mail($para, $assunto, $menssagem, $headers);
echo $enviar;

?>