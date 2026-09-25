<?php

 $tieneHijo = "no";
 $pagoMensual = 1025;
 $rumeracionMV = 0.10;

 if($tieneHijo == "si"){
  $pagoRumeracion = $pagoMensual * $rumeracionMV;
 }elseif($tieneHijo == "no"){
  $pagoRumeracion = 0;
 }else{
  echo "Error";
 }

 $pagoNeto = $pagoMensual + $pagoRumeracion;

 $onp = 0.13;

 $pensionesONP = $pagoNeto * $onp;

 $pagoFinal = $pagoNeto - $pensionesONP;

 echo "-----------------------------------------------". "</br>";
 echo "Su pago inicial es: ". $pagoMensual. "</br>";
 echo "Tiene hijos: ". $tieneHijo. "</br>";
 echo "Rumeracion por tener hijos: ". $pagoRumeracion. "</br>";
 echo "ONP a descontar: ". $pensionesONP. "</br>";
 echo "Pago Final: ". $pagoFinal. "</br>";
 echo "-----------------------------------------------". "</br>";

?>