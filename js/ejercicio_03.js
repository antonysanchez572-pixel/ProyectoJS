// FASE DE ENTRADA: DECLARACION DE VARIABLES
let nombreObrero = "Pepito";
let cantidadPrendas = 150;

const tarifaPrenda = 10;
const porcentajeImpuestos = 0.03;    
const porcentajeSeguro = 0.02;      
const porcentajeSolidaridad = 0.01;  
const porcentajeBonificacion = 0.05;

// FASE DE PROCESO: LA LOGICA U OPERACION
let sueldoBruto = cantidadPrendas * tarifaPrenda;

let montoImpuestos = sueldoBruto * porcentajeImpuestos;
let montoSeguro = sueldoBruto * porcentajeSeguro;
let montoSolidaridad = sueldoBruto * porcentajeSolidaridad;
let montoBonificacion = sueldoBruto * porcentajeBonificacion;

let totalDescuentos = montoImpuestos + montoSeguro + montoSolidaridad;
let sueldoNeto = (sueldoBruto - totalDescuentos) + montoBonificacion;

// FASE DE SALIDA: SE HACEN LAS IMPRESIONES EN CONSOLA
console.log("💲Sueldo del obrero");
console.log("Obrero: ", nombreObrero);
console.log("Prendas confeccionadas: ", cantidadPrendas);
console.log("Sueldo Bruto S/ : ", sueldoBruto);
console.log("Descuento Impuestos (3%) S/ : ", montoImpuestos);
console.log("Descuento Seguro (2%) S/ : ", montoSeguro);
console.log("Descuento Solidaridad (1%) S/ : ", montoSolidaridad);
console.log("Bonificación (5%) S/ : ", montoBonificacion);
console.log("Sueldo Neto a Pagar S/ : ", sueldoNeto);