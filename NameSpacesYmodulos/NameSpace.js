/*
es una agrupacion de propiedades que estan de manera global
*/
// los namespace name son camelCase la prumera en mayuscula
var Validador;
(function (Validador) {
    // la palabra export sirve para que las funciones sean accesibles desde afuera
    function validarTexto(texto) {
        if (texto.length > 3) {
            return true;
        }
        else {
            return false;
        }
    }
    Validador.validarTexto = validarTexto;
    function validarFecha(fecha) {
        if (isNaN(fecha.valueOf())) {
            return false;
        }
        else {
            return true;
        }
    }
    Validador.validarFecha = validarFecha;
})(Validador || (Validador = {}));
console.log(Validador.validarTexto("holaaa"));
var hoy = new Date();
console.log("la fecha de hoy es: ", hoy);
console.log(Validador.validarFecha(hoy));
