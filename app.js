//SINTAXIS DE DESESTRUCTURACION/
//const { saludarHolaMundo }=require('./saludos.js');
//llamado las funciones  la funcion saludar y saludarHolaMundo
const { saludar ,saludarHolaMundo }=require('./saludos.js');
//imprimir por consola la funcion saludar, el cual muestra hola y node js por lka variable nombre
console.log(saludar('Node JS'));
//imprimir por consola saludarHolaMundo, el cual muestra !Hola, Mundo!
console.log(saludarHolaMundo());