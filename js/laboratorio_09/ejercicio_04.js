const productos = ["Mouse", "Teclado", "Monitor", "Alfombra"];
const precios = [80.00, 150.00, 650.00, 45.00];

let totalPagar = 0;

console.log(":::: DESCUENTOS EN CARRITO DE COMPRAS ::::");

for (let i = 0; i < precios.length; i++) {

    let nombreProducto = productos[i];
    let precioUnitario = precios[i];
    let precioFinal = precioUnitario;

    
    if (precioUnitario > 100) {
        precioFinal = precioUnitario * 0.85; 
        console.log(`${nombreProducto}: S/ ${precioUnitario.toFixed(2)} (Con 15% desc.) -> Precio final: S/ ${precioFinal.toFixed(2)}`);
    } else {
        console.log(` ${nombreProducto}: S/ ${precioUnitario.toFixed(2)} (Sin descuento)`);
    }

    totalPagar += precioFinal;
}

console.log(`TOTAL A PAGAR: S/ ${totalPagar.toFixed(2)}`);