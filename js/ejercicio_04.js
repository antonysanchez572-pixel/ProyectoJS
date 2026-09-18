let nombreEmpleado = "damaris";
let horasTrabajas = 40;
let tarifaHora = 50;

let salarioBruto = horasTrabajas * tarifaHora;
const impuesto = 0.10 * salarioBruto;
let salarioNeto = salarioBruto - impuesto;

console.log(":::::::BOLETA DE PAGO:::::::");
console.log("Nombre del Empleado: " , nombreEmpleado);
console.log("🕑Horas Trabajadas:" , horasTrabajas);
console.log("💸Tarifa por Horas: S/" ,tarifaHora);
console.log("💸Salario Bruto: S/" , salarioBruto);
console.log("💸Impuesto: S/" , impuesto);
console.log("💸Salario Neto: S/" , salarioNeto);




