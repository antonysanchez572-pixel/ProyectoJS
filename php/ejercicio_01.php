<?php
// FASE DE ENTRADA:
// DECLARACION DE VARIABLES Y PREGUNTAS
// let producto = "Zapatillas adidas"

$producto = "Zapatillas adidas";
// const curso = "Lógica y progamación"
$precio = 350;
$descuento = 0.08;
$igv = 0.18;


// FASE DE PROCESO : ES LAS LOGICA DEL PROGRAMA
$precioIGV = $precio * $igv;
$precioDescuento = $precio * $descuento;
$precioFinal = $precio + $precioIGV - $precioDescuento;

// FASE DE SALIDA: IMPRESION DE RESULTADO
// Modo javascrpt: console.log("EL PRECIO DE PRODUCTO ES: " , precio);
echo "El precio del productoes es: S/" . $precio ."<br>" ;
echo "El IGV es. S/ " . $precioIGV ."<br>";
echo "El descuento es: S/" . $precioDescuento ."<br>";
echo "El precio final es: S/" . $precioFinal ."<br>";

?>