function enviarMision(xmen) {
    console.log("Enviando a " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviado al cuartel " + xmen.nombre);
}
var wolverine = {
    nombre: "wolverine",
    poder: "garras"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
var tormenta = {
    nombre: "tormenta"
};
enviarMision(tormenta);
enviarCuartel(tormenta);
// esto es un objeto que cumple con la interfaz Persona
var persona1 = {
    nombre: "sebastian",
    apellido: "quinayas",
    edad: 23,
    nombreCompleto: function () {
        console.log("Nombre completo: " + this.nombre + " " + this.apellido);
    }
};
function enviarCasa(per) {
    console.log("Enviado a casa a " + per.nombre + " " + per.apellido);
}
enviarCasa(persona1);
// ***************    Interfaces en las clases    ***************
var Estudiante = /** @class */ (function () {
    function Estudiante() {
    }
    Estudiante.prototype.nombreCompleto = function () {
        console.log("Nombre completo: " + this.nombre + " " + this.apellido);
    };
    return Estudiante;
}());
var sumas;
sumas = function (num1, num2) {
    return num1 + num2;
};
var resta;
resta = function (num1, num2) {
    return num1 - num2;
};
var multiplicar;
multiplicar = function (num1, num2) {
    return num1 * num2;
};
