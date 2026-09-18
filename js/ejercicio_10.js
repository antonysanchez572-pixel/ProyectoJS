// FASE DE ENTRADA: DECLARACION DE VARIABLES
let num1 = 45;
let num2 = 12;
let num3 = 30;


let menor = Math.min(num1, num2, num3);
let mayor = Math.max(num1, num2, num3);
let medio = (num1 + num2 + num3) - menor - mayor;

console.log("ORDENAR TRES NÚMEROS");
console.log("Números: ", num1, ",", num2, ",", num3);
console.log("Números en orden ascendente: ", menor, medio, mayor);