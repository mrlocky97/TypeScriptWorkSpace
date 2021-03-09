// variable de tipo boolean
var esSuperman = true;
/*no es recomendable ya que este lenguaje
pretende dar la mayor informacion posible
*/
var esAcuaman = true;
esBuenoMalo(esSuperman);
esSuperman = convertirClark();
esBuenoMalo(esSuperman);
// esto es una funcion
function convertirClark() {
    return false;
}
function esBuenoMalo(heroe) {
    if (heroe) {
        console.log("estamos salvados.");
    }
    else {
        console.log("estamos jodidos.");
    }
}
//***********************   Number   **************************
var advengers = 5;
var villanos = 2;
var otros = 4;
if (advengers > villanos) {
    console.log("Ganamos.");
}
else {
    console.log("Estamos jodidos");
}
//***********************   Strings   **************************
var batman = "Batman";
var linternaVerde = 'linternacVerde';
var volcanNegro = "Volcan Negro";
console.log(batman);
console.log(linternaVerde);
console.log(volcanNegro);
var concatenar = "los h\u00E9roes son: " + batman + ", " + linternaVerde + ", " + volcanNegro;
console.log(concatenar);
//***********************   Any   **************************
var vengador;
//un valor de tipo any puede ser cualquier variable
var existe;
// las variables solamente declaradas por defecto son de tipo any
var derrotas;
vengador = "Dr. strange";
console.log(vengador.charAt(0));
vengador = 1235;
console.log(vengador.toFixed(2));
vengador = true;
console.log(vengador);
console.log(existe);
console.log(derrotas);
//***********************   Array   **************************
var arrayNumeros = [1, 2, 3, 4, 5];
arrayNumeros.push(9);
var arrayVillanos = ["omega rojo", "tanos", "duende verde"];
arrayVillanos.push("caballero oscuro");
//***********************   Tuplas   **************************
var hero = ["iron man", 1];
//***********************   Enum - enumeraciones   **************************
// es parecido a una function y una clase
// esta variable tiene como objetivo darle sentido a conjuntos de numeros
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 2] = "medio";
    Volumen[Volumen["maximo"] = 10] = "maximo";
})(Volumen || (Volumen = {}));
var audio = Volumen.min;
console.log(audio);
console.log(Volumen);
console.log(Volumen["maximo"]);
console.log(Volumen[1]);
//***********************   Void   **************************
function llamarBatman() {
    console.log("Bati señal");
}
var mensaje = llamarBatman();
function llamarHeroe() {
    console.log("auxilio...");
}
llamarHeroe();
//***********************   Never   **************************
/* cuando tenemos un metodo que devuelve never
significa que ya acaba nuestro programa. El programa ya no
puede seguir.
*/
function error(mensaje) {
    throw new Error(mensaje);
}
/* el never sirve para hacer corta fuegos en el programa
*/
//error("Error: 404.");
//***********************   Aserciones de tipo   **************************
// castea o tranformar datos a otros
var aux = "cadena";
var lenthCadena = aux.length;
console.log("tamaño de cadena \"cadena\": ", lenthCadena);
//***********************   Null y Undefined   **************************
var ironman;
ironman = "Tony";
var num = 10;
//***********************   Funciones basicas   **************************
var heroe = "falsh";
function imprime_heroe(heroe) {
    console.log("Hola ", heroe);
}
imprime_heroe(heroe);
// declarar una funcion como variable
var activar_senal = function () { return "señal activada"; };
console.log(activar_senal());
//***********************   Funciones parametros opcionales   **************************
function hola(nombre) {
    return "Hola " + nombre;
}
//en el parametro despues del nombre el signo de ? hace que el parametro
// no sea obligatorio
console.log(hola("sebas"));
console.log(hola());
//***********************   Funciones parametros por defecto   **************************
function pMayus(cadena) {
    return cadena.charAt(0).toUpperCase() + cadena.substr(1).toLowerCase();
}
// los p por defecto son los de la cabecera de la funcion que les asignamos un valor por dafault
function nombreCompleto(nombre, apellido, mayus) {
    if (mayus === void 0) { mayus = false; }
    if (mayus) {
        return nombre + " " + apellido + " mayus: " + mayus;
    }
    else {
        if (apellido != null) {
            return pMayus(nombre) + " " + pMayus(apellido) + " mayus: " + true;
        }
        else {
            return pMayus(nombre) + " " + true;
        }
    }
}
console.log(nombreCompleto("luis", "quinayas", false));
console.log(nombreCompleto("sebasPPP"));
//***********************   Funciones parametros REST   **************************
// funiones capaces de recibir x parametros y devuelve todos anidados
function identidad(nombre) {
    var parametrosRest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        parametrosRest[_i - 1] = arguments[_i];
    }
    /* el metodo join une todos los demas parametros por medio
    una coma y un espacio
    */
    return nombre + " " + parametrosRest.join(", ");
}
var heroes = identidad("ironman", "hulk", "thor", "black phanter");
console.log(heroes);
//***********************   Tipo funcion   **************************
function suma(numA, numB) {
    return numA + numB;
}
// el () es para indicar los parametros
// despues de () se le asigna => para definir el valor del retorno
var variableFuncion;
variableFuncion = suma;
console.log(variableFuncion);
