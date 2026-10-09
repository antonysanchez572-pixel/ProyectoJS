let deuda = 4500.00;
let pagoMensual = 500.00;
let mesesTranscurridos = 1;

console.log("::::CRONOGRAMA DE PAGOS::::");

while (deuda > 0){

    if(deuda >= pagoMensual){
        deuda -= pagoMensual;
        console.log(`Mes${mesesTranscurridos}:Pago de s/ ${pagoMensual.toFixed(2)}.Salto restante: S/ ${deuda.toFixed(2)}`);
        mesesTranscurridos++;
    } else {
        console.log(`Mes${mesesTranscurridos}:Pago Final de s/ ${deuda.toFixed}.Salto restante: S/ 0.00`);
    }
}

console.log("Deuda liquida en su totalidad.");
