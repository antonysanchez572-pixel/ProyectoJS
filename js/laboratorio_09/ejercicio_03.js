const tablaMultiplicacar = 9;
const limite = 12;

console.log(`::::TABLA DE MULTIPLICAR DEL ${tablaMultiplicacar}::::`);

for(let i=1; i <= limite; i++){
    let resultado = tablaMultiplicacar * i;

    console.log(`${tablaMultiplicacar} X ${i} = ${resultado}`);
}