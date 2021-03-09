"use strict";
/* para que estos archivos sean modulos tienen que tener la
palabra export*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerError = exports.mensajes = void 0;
exports.mensajes = [
    "texto corto",
    "este texto es muy largo"
];
function obtenerError(numError) {
    return exports.mensajes[numError];
}
exports.obtenerError = obtenerError;
