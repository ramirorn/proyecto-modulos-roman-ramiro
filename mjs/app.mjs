// Importaciones de funciones nombradas
import { sumar } from "./funcionesNombradas.mjs";
console.log(sumar(5, 3));
import { restar } from "./funcionesNombradas.mjs";
console.log(restar(5, 3));


// Importaciones de funciones por defecto
import funciones from "./funcionesPorDefecto.mjs";
console.log(funciones.multiplicar(5, 3));
