let nombreProducto = "Mouse Óptico";
let precioProducto = 100;

const porcentajeDescuento = 0.08;
const porcentajeIgv = 0.18;

let descuento = precioProducto * porcentajeDescuento;
let subTotal = precioProducto - descuento;
let montoIgnv = subTotal * porcentajeIgv;
let totalPagar = subTotal + montoIgnv;

console.log("🛒Producto: " , nombreProducto);
console.log("💸Precio base S/ :" , precioProducto);
console.log("💸Descuento (8%) S/ : " , descuento);
console.log("💸Sub total  S/  : " , subTotal);
console.log("💸Igv (18%) S/ :" , montoIgnv);
console.log("💸Total a pagar S/ : " , totalPagar)