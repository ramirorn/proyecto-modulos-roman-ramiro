//Importacion nombrada
const {sumar, restar} = require('./funcionesNombradas.cjs');
console.log(sumar(5, 3));

//importacion por defecto
const funciones = require('./funcionesPorDefecto.cjs');
console.log(funciones.sumar(5, 3));
console.log(funciones.restar(5, 3));