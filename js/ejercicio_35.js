// 1. Arreglo con los sueldos de los colaboradores (10 originales + 40 nuevos)
const sueldoColaboradores = [
    2500, 1300, 4800, 5300, 1200, 5800, 1380, 6899, 4578, 5487,
    3200, 1500, 4100, 6000, 2200, 3900, 1100, 7500, 4800, 5100,
    2900, 1600, 4300, 5500, 2400, 6100, 1450, 4999, 3700, 5200,
    3100, 1750, 4600, 5800, 2100, 6400, 1350, 5300, 4200, 5900,
    2800, 1900, 4400, 5200, 2600, 5700, 1250, 6200, 3900, 4850
];

const porcentajeAguinaldo = 0.20;

for (let i = 0; i < sueldoColaboradores.length; i++) {
    let sueldoBase = sueldoColaboradores[i];
    let aguinaldo = sueldoBase * porcentajeAguinaldo;
    let totalPagar = sueldoBase + aguinaldo;

    console.log("Sueldo Base: ", sueldoBase);
    console.log("Aguinaldo: ", aguinaldo.toFixed(2));
    console.log("Total a Pagar: ", totalPagar.toFixed(2));
}