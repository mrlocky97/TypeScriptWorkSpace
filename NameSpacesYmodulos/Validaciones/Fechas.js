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
