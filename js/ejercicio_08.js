let nombreAlumno = "Juan"
let nota1 = 9;
let nota2 = 8;
let nota3 = 5;
let nota4 = 7;

let sumaNotas = nota1 + nota2 + nota3 + nota4;
let promedioNotas = sumaNotas / 4;

let Condicion = "";
let mensaje = "";

if (promedioNotas >= 11) {
    Condicion = "Aprobado"
} else {
    Condicion = "Desaprobado"
};

if (promedioNotas >= 13) {
mensaje = "certificado en MS-OFFICE "
} else {
    mensaje = " no esta calificado para el cerficado"
};

console.log ( "CALIFICACIONES DEL ALUMNO:" , nombreAlumno);
console.log ( "Calificaiones del Alumno;" , nota1 , nota2 , nota3 , nota4 );
console.log ( "Promedio del alumno:" , promedioNotas),
console.log ( "Condicion:" , Condicion  );
console.log ("Certificado:" , mensaje)

