//SISTEMA DE PRECIOS SEGUN EDAD
//parseINT: Sirve para convertir un datos a valor numerico
// entero.
let edad = parseInt(prompt("Ingrese sus edad"));

if (edad <= 10 ){
    console.log("Entrada gratuita");
}else if (edad <= 14){
    console.log("Precio de entrda S/ 8.00 ( adolesente)");
}else if (edad <= 60){
    console.log("Precio de entrada: S/ 20.00 (adulto)");
}else{
    console.log("Precio de entrada: S/ 7.00 (adulto mayor)");
}