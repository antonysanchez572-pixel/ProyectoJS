const preciosEscaneados = [45.00, 120.00, 35.00, 0];
let contador = 0;
let totalPagar = 0;

console.log(":::: FACTURACIÓN EN PUNTO DE VENTA (POS) ::::");

do {
    
    let precio = preciosEscaneados[contador];
    contador++;

    if (precio > 0) {
        totalPagar += precio;
        console.log(`Producto escaneado :${contador}: S/ ${precio.toFixed(2)}`);
    } else {
        console.log(" Finalizar Compra");
    }

} while (preciosEscaneados[contador - 1] !== 0); 

console.log(`TOTAL A PAGAR: S/ ${totalPagar.toFixed(2)}`);