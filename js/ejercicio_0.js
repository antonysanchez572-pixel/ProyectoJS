//Declaracion de variables y tipos de datos
const nombreProducto = "Lapto Gamer";
let precioOriginal = "4500.99";
const descuento = 15;
let stockDisponible = "5";
let enOferta = "true";

// Calcular el precio con descuento usando operadores
let precioFinal = precioOriginal - precioOriginal * descuento / 100;

// Mostrar informacion del producto
console.log("🔷 producto:", nombreProducto);
console.log("🔷 precio Original: S/", precioOriginal);
console.log("🔷 Descuento:", descuento ,"%");
console.log("🔷 precio Final: S/", precioFinal.toFixed(2));
console.log("🔷 Stock Disponible:", stockDisponible);
console.log("🔷 En Oferta:", enOferta ? "si" : "no");

// simular compra y actualizar stock
let cantidadComprada = 2;

// validar si hay stock suficiente
if (cantidadComprada < stockDisponible) {
   stockDisponible -= cantidadComprada;
   console.log("✅ Compra realizada con exito.");
   console.log("📦 stock actualizado:", stockDisponible);
} else {
    console.log("❌ No hay suficiente stock disponible.")
}