let funciones = {};
// Definimos un objeto vacío para almacenar las funciones
funciones.sumar = (num1, num2) => { 
    return num1 + num2;
}

funciones.restar = (num1, num2) => {
    return num1 - num2;
}

module.exports = funciones;
// Exportando las funciones sumar y restar como un objeto