<?php
// Vamos a declarar todas las variables necesarias
$precios = [
    "pantalones de Lana" => 45.00,
    "Sueter de Casimir" => 100.00,
    "Blusa de Seda" => 14.00,
    "Camisola de Seda" => 10.00,
    "Falta Recta" => 40.00,
    "Saco de Lana" => 120.00
];

$prenda = "Sueter de Casimir";
$cantidad = 8;

// AHORA OBTENEMOS EL PRECIO UNITARIO DESDE EL ARREGLO
$precioUnitario = $precios[$prenda];

// REALIZAMOS EL CALCULO
$montoVenta = $precioUnitario * $cantidad;

// DETERMINAMOS EL PORCENTAJE DE DESCUENTO
    if($montoVenta < 100){
        $porcentajeDescuento = 0.02;
    }elseif($montoVenta <= 500){
        $porcentajeDescuento = 0.04;
    }elseif($montoVenta <= 1000){
        $porcentajeDescuento = 0.06;
    }elseif($montoVenta <= 1500){
        $porcentajeDescuento = 0.08;
    }else{
        $porcentajeDescuento = 0.20;
    }
    // Calculamos el monto de descuento
    $montoDescuento = $montoVenta * $porcentajeDescuento;

    // Calculamos el monto neto a pagar
    $montoNeto = $montoVenta - $montoDescuento;

    // calculamos el igv
    $tasaIGV = 0.18;
    $montoIGV = $montoNeto * $tasaIGV;
    // fase de salida imprimos todo

    echo  "::::::::::DETALLE DE COMPRA: TELAS Y MODA DE OTOÑO PEPITO:::::::::" . "<br>";
    echo  "Prenda seleccionado: " . $prenda . "<br>";
    echo  "Cantidad :" . $cantidad . "<br>";
    echo  " Precio unitario: " . $precioUnitario . "<br>";
    echo  "...................................................................." . "<br>";
    echo  "Monto de Venta: " . $montoVenta . "<br>";
    echo  "Descuento: " . $montoDescuento ."<br>";
    echo  "IGV :" . $montoIGV . "<br>" ;
    echo  "Monto neto a pagar : " . $montoNeto . "<br>";
    echo  "...................................................................." . "<br>";

?>