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
