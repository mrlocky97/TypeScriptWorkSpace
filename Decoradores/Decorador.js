"use strict";
/* un decorador es una etiqueta que se pone antes de la funcion,
metodo, propiedad o clase
*/
//********************    decoradores de clase    ********************
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function consola(constructor) {
    console.log(constructor);
}
var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
    }
    Villano = __decorate([
        consola // esto lo que hace es enviar como parametro el constructor a fuerza
    ], Villano);
    return Villano;
}());
//********************    decoradores de fabrica    ********************
/*
es una funcion normal que puede resivir parametros pero debe
de regresar algo que pueda ser utilizado como decoradores
*/
function nada() { }
// esto es un decoredor de fabrica
function imprimirConsola(imprimir) {
    if (imprimir) {
        return consola;
    }
    else {
        return nada;
    }
}
var Villano2 = /** @class */ (function () {
    function Villano2(nombre) {
        this.nombre = nombre;
    }
    Villano2 = __decorate([
        imprimirConsola(true)
    ], Villano2);
    return Villano2;
}());
//********************    Ejemplo de decoradores    ********************
function planVillano(constructor) {
    constructor.prototype.imprimirPlan = function () {
        console.log("el plan de ", this.nombre, " es dominar el mundo.");
    };
}
//********************    Decoradores anidados    ********************
function imprimible(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
}
// decoredor de clase directo
var Villano3 = /** @class */ (function () {
    function Villano3(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
    }
    Villano3 = __decorate([
        imprimible,
        planVillano
    ], Villano3);
    return Villano3;
}());
var lex = new Villano3("Lex luthor", "inmortal");
lex.imprimirPlan();
lex.imprimir();
//********************    Decoradores de metodos    ********************
/*
para evitar de que nuestra funcion se sobreescriba.
los decoradores siempre devuelven funciones
*/
function ebitar(esEbitable) {
    return function (target, nombrePropiedad, descriptor) {
        descriptor.writable = esEbitable;
    };
}
//esto es un decorador de propiedad y la diferencia es no pasarle por parametro el PropertyDescriptor
function ebitarProp(esEbitable) {
    return function (target, nombrePropiedad) {
        var descriptor = {
            writable: esEbitable
        };
        return descriptor;
    };
}
var Coche = /** @class */ (function () {
    function Coche(modelo, anno) {
        this.modelo = modelo;
        this.anno = anno;
    }
    Coche.prototype.imprimirModelo = function () {
        console.log("el modelo del coche es " + this.modelo + ".");
    };
    __decorate([
        ebitarProp(true)
    ], Coche.prototype, "anno", void 0);
    __decorate([
        ebitar(true)
    ], Coche.prototype, "imprimirModelo", null);
    return Coche;
}());
var coche = new Coche("Roadter", 2021);
coche.imprimirModelo();
coche.imprimirModelo = function () {
    console.log("el metodo se ha cambiado ahora el modelo es otro.");
};
coche.imprimirModelo();
console.log(coche);
//********************    Decoradores de parametros    ********************
function decParametro(target, metodo, index) {
    console.log(target, metodo, index);
}
var Moto = /** @class */ (function () {
    function Moto(marca) {
        this.marca = marca;
    }
    Moto.prototype.imprimirMarca = function (plan, modelo) {
        if (plan) {
            console.log("la marca de la moto es " + this.marca);
        }
        else {
            console.log(modelo);
        }
    };
    __decorate([
        __param(1, decParametro)
    ], Moto.prototype, "imprimirMarca", null);
    return Moto;
}());
