<?php

$costoLicencia = 120;
$cantidadLicencias =65;
$compraTotal = $cantidadLicencias * $costoLicencia;

if ($compraTotal > 5000) {
  $costoFlete = 0;
} else {
  $costoFlete = 150;
}

echo ":::::::::: LICENCIA DE SOFTWARE ::::::::::" . "<br>";
echo "<br>";
echo "Costo de licencias: S/" . $costoLicencia . "<br>";
echo "Cantidad a comprar: " . $cantidadLicencias . "<br>";
echo "Costo total a pagar: S/" . $compraTotal . "<br>";
echo "Costo a pagar por flete: " . $costoFlete . "<br>";

?>