// esta es una funcion generica que devuelve cualquier cosa segun su parametro
function regresar(parametro) {
    return parametro;
}
/*
La T es una caracteristica donde le dice al metodo que es generico y que
reconozca en todo momento lo que devuelve
*/
console.log(regresar(12.5).toFixed(2));
console.log(regresar("sebastian"), " y su tamaño es: ", regresar("sebastian").length);
console.log(regresar(new Date().getDay()).toPrecision());
var deadPool = {
    nombre: "Dead pool",
    poder: "Inmortal",
    edad: 100
};
// al enviar datos personalizados es bueno especificar el tipo
console.log(regresar(deadPool).nombre);
var her = {
    nombre: "juan",
    apellido: "sebas"
};
console.log(regresar(her).apellido);
//********************    arrays genericos    ********************
var heroes = ["flash", "batman", "superman"];
heroes.push("acuaman");
var villanos = ["lex luthor", "flash reverso"];
/*
la diferencia de estos 2 arrays es que heroes es un array generico personalizados
ambos son lo mismo ya que heroes es declarado de forma generica y villanos de Forma
explisita
*/
//********************    Clases genericas    ********************
var Cuadrado = /** @class */ (function () {
    function Cuadrado() {
    }
    Cuadrado.prototype.area = function () {
        return +this.base * +this.altura; // EL + es un casteo que devuelve un numero
    };
    return Cuadrado;
}());
/* en este caso a la base y altura se le puede asiganar cualquier valor ya que
es un tipo generico esto puede dar problemas a futuro la solucion es especificar
los tipos de datos que se aceptan*/
var cuadrado = new Cuadrado();
cuadrado.base = 10;
cuadrado.altura = "5";
console.log("el area del cuadrado es: ", cuadrado.area());
// T extends tipo de datos para especificar que se aceptan y cuales no
var Rectangulo = /** @class */ (function () {
    function Rectangulo() {
    }
    Rectangulo.prototype.area = function () {
        return +this.base * +this.altura; // EL + es un casteo que devuelve un numero
    };
    return Rectangulo;
}());
/*
a la hora de declarar el objeto se puede especificar el tipo de dato que va a menejar
recordando que en este caso solo se pueden manejar strings o numbers
*/
var rectangulo = new Rectangulo();
rectangulo.base = 10;
rectangulo.altura = 10;
console.log("numeros: ", rectangulo.area());
var rectangulo2 = new Rectangulo();
rectangulo2.base = "10";
rectangulo2.altura = "10";
console.log("strings: ", rectangulo2.area());
var rectangulo3 = new Rectangulo();
rectangulo3.base = "10";
rectangulo3.altura = 10;
console.log("ambos: ", rectangulo3.area());
