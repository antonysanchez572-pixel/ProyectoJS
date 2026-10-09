const pinCorrecto = "1234";

const intentos= ["45587" , "45559" , "7258"];
let intentosRealizados = 0;
const maxIntentos = 3;
let accesoConcedido = false ;

do{
    let pinIngresado = intentos[intentosRealizados];
    intentosRealizados++;
    console.log(`Intento ${intentosRealizados}: Ingresando PIN...`)
    if (pinIngresado === pinCorrecto){
        console.log("PIN ACEPTADO.BIENVENIDO AL SISTEMA");
        accesoConcedido = true;
    }else{
        console.log("PIN INCORRECTO.");
    }
} while(!accesoConcedido && intentosRealizados < maxIntentos){
    console.log("¡¡¡TARJETA BLOQUEADA!!!");
}
