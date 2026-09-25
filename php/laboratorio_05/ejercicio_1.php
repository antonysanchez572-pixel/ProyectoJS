<?php

  $tarifaHora = 40;
  $horasTrabajadas = 30;
  $dominio = 200;
  $hosting = 150;

  $pagoTrabajado = $tarifaHora * $horasTrabajadas;
  $pagoNeto = $pagoTrabajado + $dominio + $hosting;

  echo "-----------------LANDING PAGE--------------------". "</br>";
  echo "Tarifa por hora: ". $tarifaHora. "</br>";
  echo "Horas trabajadas: ". $horasTrabajadas. "</br>";
  echo "Precio del dominio: ". $dominio. "</br>";
  echo "Precio del hosting: ". $hosting. "</br>";
  echo "El presupuesto total es: ". $pagoNeto. "</br>";

?>