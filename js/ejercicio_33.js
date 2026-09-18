
let numero = 44;

let decena = Math.floor(numero / 10);
let unidad = numero % 10;

let resultado = "";

if (decena === unidad) {
    resultado = "El número si es capicúa"
} else {
     resultado = "El número no es capicúa"
}; 
console.log("VERIFICADOR DE NÚMERO CAPICÚA");
console.log("Número evaluado: ", numero);
console.log("Resultado: ", resultado);