// esta es una funcion generica que devuelve cualquier cosa segun su parametro
function regresar<T>(parametro:T):T{
  return parametro;
}
/*
La T es una caracteristica donde le dice al metodo que es generico y que
reconozca en todo momento lo que devuelve
*/
console.log(regresar(12.5).toFixed(2));
console.log(regresar("sebastian"), " y su tamaño es: ", regresar("sebastian").length);
console.log(regresar(new Date().getDay()).toPrecision());
// vamos a crear datos personalizados
type Heroe = {
  nombre:string,
  apellido:string;
}
 type Villano = {
   nombre:string,
   edad:number;
 }

 let deadPool = {
   nombre:"Dead pool",
   poder:"Inmortal",
   edad:100
 };
 // al enviar datos personalizados es bueno especificar el tipo
console.log(regresar(deadPool).nombre);
let her:Heroe = {
  nombre:"juan",
  apellido:"sebas"
};
console.log(regresar<Heroe>(her).apellido);

//********************    arrays genericos    ********************
let heroes :Array<string> = ["flash", "batman", "superman"];
heroes.push("acuaman");
let villanos:string[] = ["lex luthor", "flash reverso"];
/*
la diferencia de estos 2 arrays es que heroes es un array generico personalizados
ambos son lo mismo ya que heroes es declarado de forma generica y villanos de Forma
explisita
*/

//********************    Clases genericas    ********************

class Cuadrado<T>{
  base!: T;
  altura!: T;
  public area():number{
    return +this.base * +this.altura;// EL + es un casteo que devuelve un numero
  }
}
/* en este caso a la base y altura se le puede asiganar cualquier valor ya que
es un tipo generico esto puede dar problemas a futuro la solucion es especificar
los tipos de datos que se aceptan*/
let cuadrado = new Cuadrado();
cuadrado.base = 10;
cuadrado.altura = "5";
console.log("el area del cuadrado es: ",cuadrado.area());

// T extends tipo de datos para especificar que se aceptan y cuales no
class Rectangulo<T extends number|string>{
  base!: T;
  altura!: T;
  public area():number{
    return +this.base * +this.altura// EL + es un casteo que devuelve un numero
  }
}
/*
a la hora de declarar el objeto se puede especificar el tipo de dato que va a menejar
recordando que en este caso solo se pueden manejar strings o numbers
*/
let rectangulo = new Rectangulo<number>();
rectangulo.base = 10;
rectangulo.altura = 10;
console.log("numeros: ",rectangulo.area());
let rectangulo2 = new Rectangulo<string>();
rectangulo2.base = "10";
rectangulo2.altura = "10";
console.log("strings: ", rectangulo2.area());
let rectangulo3 = new Rectangulo<string|number>();
rectangulo3.base = "10";
rectangulo3.altura = 10;
console.log("ambos: ", rectangulo3.area());
