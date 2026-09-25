<?php

$nombreCliente = "pepe";
$cantidad = 4;          
$precioUnitario = 500;  
$porcentajeDescuento = 0.10; 
$igv = 0.18;           

$subtotal= $cantidad * $precioUnitario;

if ($cantidad > 3) {
    $montoDescuento = $subtotal * $porcentajeDescuento;
} else {
    $montoDescuento = 0;
}

$subtotalConDescuento = $subtotal - $montoDescuento;

$montoIgv = $subtotalConDescuento * $igv;
$precioFinal = $subtotalConDescuento + $montoIgv;

echo "Nombre del Cliente: " . $nombreCliente . "<br>";
echo "............................................................." . "<br>";
echo "Cantidad de monitores: " . $cantidad . "<br>";
echo "Precio unitario: S/ " . $precioUnitario . "<br>";
echo "Subtotal bruto: S/ " . $subtotal . "<br>";
echo "............................................................." . "<br>";
echo "Descuento aplicado: S/ " . $montoDescuento . "<br>";
echo "Subtotal con descuento: S/ " . $subtotalConDescuento . "<br>";
echo "IGV (18%): S/ " . $montoIgv . "<br>";
echo ".............................................................." . "<br>";
echo "Precio total de facturación: S/ " . $precioFinal ."<br>";

?>