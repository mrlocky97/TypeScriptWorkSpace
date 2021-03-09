// las constantes su nombre son en mayusculas
// las constantes nopueden cambiar su valor
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var OPCIONES = "Activo";
// ***************   Templates literales ***************
// permite crear string de otra forma
// antes
var nombre1 = "neska";
var nombre2 = 'robin';
/* nuevo son los `` nos permite hacer miltilinea y se puede introducir variables
de esta manera ${}
*/
function imprimir() {
    return OPCIONES;
}
var mensaje = "linea1\nlinea2 Hola " + nombre1 + "\nlinea3 " + nombre2 + " es un heroe.\nla sumas de 5 + 7 es: " + (5 + 7) + "\nopciones: " + imprimir();
console.log(mensaje);
// ***************   Funciones de flecha ***************
function sumas(a, b) {
    return a + b;
}
console.log(sumas(9, 7));
//function lamda
var suma = function (a, b) { return a + b; };
console.log(suma(1, 5));
var darOrden = function (orden) { return "Hulsk " + orden; };
console.log(darOrden("Smash."));
var capitanAmerica = {
    nombre: "Hulk",
    darOrdenHulk: function () {
        var self = this; // para que el  nuevo puntero sepa que es this
        setTimeout(function () {
            console.log(self.nombre + " smash!!!");
        }, 1);
        //console.log(`${this.nombre} smash!!!`);
    }
};
capitanAmerica.darOrdenHulk();
// una de las propiedades de las funcines lamda no cambian el objeto this
var capitanAmerica2 = {
    nombre: "Hulk",
    darOrdenHulk: function () {
        var _this = this;
        setTimeout(function () {
            return console.log(_this.nombre + " smash 2!!!");
        }, 1);
    }
};
capitanAmerica2.darOrdenHulk();
// ***************   Destruturacion de objetos    ***************
var advengers = {
    nick: "Samuel Jackson",
    ironman: "Robert Downet Jr",
    vision: "Paul Bettany"
};
// extrae las variables del objeto
/*
let nick = advengers.nick;
let ironman = advengers.ironman;
let vision = advengers.vision;
*/
// destructuring of objects
var nick = advengers.nick, ironman = advengers.ironman, vision = advengers.vision;
console.log(nick);
console.log(ironman);
console.log(vision);
// asignar otro nombre de variable
console.log("\n**********************\n");
var warmachine = advengers.nick, warmachine2 = advengers.ironman, warmachine3 = advengers.vision;
console.log(warmachine);
console.log(warmachine2);
console.log(warmachine3);
// ***************   Destruturacion de array    ***************
var vengadores = ["samuel Jackson", "Robert Dowey Jr", "Paul Bettany"];
var vengador1 = vengadores[0], vengador2 = vengadores[1], vengador3 = vengadores[2];
console.log("\n**********************\n");
console.log(vengador1);
console.log(vengador2);
console.log(vengador3);
// ***************  For of    ***************
var thor = {
    nombre: "thor",
    arma: "martillo"
};
var ironman32 = {
    nombre: "ironman",
    arma: "armorduit"
};
var capi = {
    nombre: "capitan america",
    arma: "escudo"
};
var avengers = [thor, ironman32, capi];
for (var i in avengers) {
    console.log(avengers[i].nombre);
}
console.log("\n**********************\n");
console.log("los heroes son:  ");
for (var i = 0; i < avengers.length; i++) {
    console.log(avengers[i].nombre);
}
console.log("\n**********************\n");
// este for es como un foreach
for (var _i = 0, avengers_1 = avengers; _i < avengers_1.length; _i++) {
    var x = avengers_1[_i];
    console.log(x.nombre);
}
// ***************  Clases   ***************
var Avenger = /** @class */ (function () {
    function Avenger(nom, pod) {
        this.nombre = nom;
        this.poder = pod;
    }
    return Avenger;
}());
var hulk = new Avenger("hulk", "fuerza");
console.log(hulk);
var AvengerVolador = /** @class */ (function (_super) {
    __extends(AvengerVolador, _super);
    function AvengerVolador(nombre, poder, vol) {
        var _this = _super.call(this, nombre, poder) || this;
        _this.volar = vol;
        return _this;
    }
    return AvengerVolador;
}(Avenger));
var alcon = new AvengerVolador("falcon", "armas", true);
console.log(alcon);
