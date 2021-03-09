var Fecha;
(function (Fecha) {
    function validarFecha(fecha) {
        if (isNaN(fecha.valueOf())) {
            return false;
        }
        else {
            return true;
        }
    }
    Fecha.validarFecha = validarFecha;
})(Fecha || (Fecha = {}));
var Texto;
(function (Texto) {
    // la palabra export sirve para que las funciones sean accesibles desde afuera
    function validarTexto(texto) {
        if (texto.length > 3) {
            return true;
        }
        else {
            return false;
        }
    }
    Texto.validarTexto = validarTexto;
})(Texto || (Texto = {}));
