// funcion con una varible nombre que retorna un string y una varible
function saludar(nombres){
    return 'Hola ' + nombres;   
}
// funcion que retorna un string 
function saludarHolaMundo(){
    return '!Hola, Mundo!';
}


//module.exports.saludar=saludar;

//module.exports.saludarHolaMundo=saludarHolaMundo;
//para poder exportar el contenido a la app.js la funcion saludar y saludarHolaMundo
module.exports={
    saludar: saludar, 
    saludarHolaMundo:saludarHolaMundo
}