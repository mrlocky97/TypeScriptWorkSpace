"use strict";
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
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nomR, pelea, victorias) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nomR;
        this.pelea = pelea;
        this.victorias = victorias;
    }
    Object.defineProperty(Avenger.prototype, "getNombreReal", {
        get: function () {
            return this.nombreReal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Avenger.prototype, "setNombreReal", {
        set: function (nombreNuevo) {
            this.nombreReal = nombreNuevo;
        },
        enumerable: false,
        configurable: true
    });
    return Avenger;
}());
var antMan = new Avenger("antman", "ironman", "sebas", true, 7);
console.log(antMan);
antMan.nombre = "nick";
console.log(antMan.getNombreReal);
antMan.setNombreReal = "juan";
console.log("nuevo nombre: ", antMan.getNombreReal);
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Object.defineProperty(Persona.prototype, "getNombre", {
        get: function () {
            return this.nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setNombre", {
        set: function (nuevoNombre) {
            this.nombre = nuevoNombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getEdad", {
        get: function () {
            return this.edad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setEdad", {
        set: function (nuevaEdad) {
            this.edad = nuevaEdad;
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
var Xmen = /** @class */ (function (_super) {
    __extends(Xmen, _super);
    function Xmen(nombre, edad, poder) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.poder = poder;
        return _this;
    }
    Object.defineProperty(Xmen.prototype, "getPoder", {
        get: function () {
            return this.poder;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Xmen.prototype, "Poder", {
        set: function (nuevoPoder) {
            this.poder = nuevoPoder;
        },
        enumerable: false,
        configurable: true
    });
    Xmen.suma = function (a, b) {
        return a + b;
    };
    return Xmen;
}(Persona));
var lovezno = new Xmen("juan", 23, "garras");
console.log(lovezno.getEdad);
lovezno.setEdad = 22;
console.log(lovezno.getEdad);
//***************   metodos y variables staticas  ***************
/*
se pueden llamar desde cualquier parte sin crear el objeto en si solo con
hacer referencia a la clase.metodo o propiedad
*/
console.log(Xmen.suma(4, 6));
//***************   Clases abstractas  ***************
var Mutantes = /** @class */ (function () {
    function Mutantes(nombre, bando) {
        this.nombre = nombre;
        this.bando = bando;
    }
    Object.defineProperty(Mutantes.prototype, "getNombre", {
        get: function () {
            return this.nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mutantes.prototype, "setNombre", {
        set: function (nuevoNombre) {
            this.nombre = nuevoNombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mutantes.prototype, "getBando", {
        get: function () {
            return this.bando;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mutantes.prototype, "setBando", {
        set: function (nuevoBando) {
            this.bando = nuevoBando;
        },
        enumerable: false,
        configurable: true
    });
    return Mutantes;
}());
/*
unas de las porpiedades de las clases abstractas es
no se pueden crear instancias de estas.
son como un molde para las clases y heredar sus propiedades
a sus hijas
*/
var Villano = /** @class */ (function (_super) {
    __extends(Villano, _super);
    function Villano(nombre, bando, poder) {
        var _this = _super.call(this, nombre, bando) || this;
        _this.poder = poder;
        return _this;
    }
    Object.defineProperty(Villano.prototype, "getPoder", {
        get: function () {
            return this.poder;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Villano.prototype, "setPoder", {
        set: function (nuevoPoder) {
            this.poder = nuevoPoder;
        },
        enumerable: false,
        configurable: true
    });
    return Villano;
}(Mutantes));
var tanos = new Villano("tanos", "malo", "guante");
console.log("nombre: " + tanos.getNombre + "\n  bando: " + tanos.getBando + "\n  poder: " + tanos.getPoder);
//***************   constructores privados  ***************
var Apocalipsis = /** @class */ (function () {
    function Apocalipsis(nombre) {
        this.nombre = nombre;
    }
    Apocalipsis.llamarApocalipsis = function (nombre) {
        if (!Apocalipsis.instancia) { // si no existe apocalipsis
            Apocalipsis.instancia = new Apocalipsis(nombre);
        }
        return Apocalipsis.instancia;
    };
    return Apocalipsis;
}());
// como no se puede llamar al constructor porque es privado
var apocalipsis = Apocalipsis.llamarApocalipsis("Juan");
console.log(apocalipsis);
/*
la idea de esto es que solo exista un solo objeto en todo el programa
y no se puedan crear mas instancias de esa clases
*/
