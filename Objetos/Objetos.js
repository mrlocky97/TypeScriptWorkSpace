//**********    Objetos   **********
//declaracion de objetos
var objeto = {
    nombre: "sebastian",
    edad: 23,
    poderes: ["invisible", "volar"]
};
// objeto con parametros espesificos y obligatorios
var objetoEspecifico = {
    nombre: "luis",
    edad: 19,
    poderes: ["volar"]
};
//metodos dentro de los Objetos
/*
getNombre:()=>string a partir de los : es para espesificar que es un metodo
si los () estan vacios ese metodo no recibe parametros
y para decirle que devuelva algo => y el tipo de dato que devuelve
*/
var objetoMetodos = {
    nombre: "luis",
    edad: 19,
    getNombre: function () {
        return this.nombre;
    }
};
var superman = {
    nombre: "sebas",
    edad: 23,
    poderes: ["invisible", 47],
    getNombre: function () {
        return this.nombre;
    }
};
//**********    Multiples tipos permitidos    **********
var loquesea = true;
loquesea = 10;
// se puede limitar a 2 tipos de datos o los que sean ejemplo
var loquesea2 = "hola";
loquesea2 = 23;
loquesea2 = {
    nombre: "ppp",
    edad: 33,
    poderes: ["invisible", 47],
    getNombre: function () {
        return this.nombre;
    }
};
//**********    Revisar el tipo de un objeto o variable    **********
var algo = 123;
console.log(typeof algo);
if (typeof algo == "number") {
    console.log("La variable algo es un numero");
}
