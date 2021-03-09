// variable de tipo boolean
let esSuperman:boolean = true;
/*no es recomendable ya que este lenguaje
pretende dar la mayor informacion posible
*/
let esAcuaman = true;
esBuenoMalo(esSuperman);
esSuperman = convertirClark();
esBuenoMalo(esSuperman);
// esto es una funcion
function convertirClark(){
  return false;
}
function esBuenoMalo(heroe:boolean){
  if(heroe){
    console.log("estamos salvados.")
  }else{
    console.log("estamos jodidos.")
  }
}

//***********************   Number   **************************
let advengers:number = 5;
let villanos:number = 2;
let otros:number = 4;

if(advengers > villanos){
  console.log("Ganamos.");
}else{
  console.log("Estamos jodidos");
}
//***********************   Strings   **************************
let batman:string = "Batman";
let linternaVerde:string = 'linternacVerde';
let volcanNegro:string = `Volcan Negro`;

console.log(batman);

console.log(linternaVerde);
console.log(volcanNegro);

let concatenar:string = `los héroes son: ${batman}, ${linternaVerde}, ${volcanNegro}`;
console.log(concatenar);
//***********************   Any   **************************
let vengador:any;
//un valor de tipo any puede ser cualquier variable
let existe;
// las variables solamente declaradas por defecto son de tipo any
let derrotas;

vengador = "Dr. strange";
console.log(vengador.charAt(0));

vengador = 1235;
console.log(vengador.toFixed(2));

vengador = true;
console.log(vengador);

console.log(existe);
console.log(derrotas);

//***********************   Array   **************************
let arrayNumeros:number[] = [1,2,3,4,5];
arrayNumeros.push(9);

let arrayVillanos:string[] = ["omega rojo", "tanos", "duende verde"];
arrayVillanos.push("caballero oscuro");

//***********************   Tuplas   **************************
let hero:[string, number] = ["iron man", 1];
//***********************   Enum - enumeraciones   **************************
// es parecido a una function y una clase
// esta variable tiene como objetivo darle sentido a conjuntos de numeros
enum Volumen{
  min = 1,
  medio,
  maximo = 10
}

let audio:Volumen = Volumen.min;
console.log(audio);
console.log(Volumen);
console.log(Volumen["maximo"]);
console.log(Volumen[1]);
//***********************   Void   **************************
function llamarBatman(){
  console.log("Bati señal");
}

let mensaje = llamarBatman();

function llamarHeroe():void{
  console.log("auxilio...");
}
llamarHeroe();
//***********************   Never   **************************
/* cuando tenemos un metodo que devuelve never
significa que ya acaba nuestro programa. El programa ya no
puede seguir.
*/
function error(mensaje:string):never{
  throw new Error(mensaje);
}
/* el never sirve para hacer corta fuegos en el programa
*/
//error("Error: 404.");

//***********************   Aserciones de tipo   **************************
// castea o tranformar datos a otros

let aux:any = "cadena";
let lenthCadena:number = (<String>aux).length;
console.log("tamaño de cadena \"cadena\": ", lenthCadena);

//***********************   Null y Undefined   **************************
let ironman:string;
ironman = "Tony";

let num:number = 10;
//***********************   Funciones basicas   **************************
let heroe:string = "falsh";

function imprime_heroe(heroe:string):void {
  console.log("Hola " , heroe);
}

imprime_heroe(heroe);
// declarar una funcion como variable
let activar_senal = function():string{return "señal activada"}
console.log(activar_senal());
//***********************   Funciones parametros opcionales   **************************
function hola(nombre?:string):string{
  return "Hola " + nombre
}
//en el parametro despues del nombre el signo de ? hace que el parametro
// no sea obligatorio

console.log(hola("sebas"));
console.log(hola());
//***********************   Funciones parametros por defecto   **************************
function pMayus(cadena:string):string {
  return cadena.charAt(0).toUpperCase() + cadena.substr(1).toLowerCase();
}
// los p por defecto son los de la cabecera de la funcion que les asignamos un valor por dafault
function nombreCompleto(nombre:string, apellido?:string, mayus:boolean = false):string {
  if (mayus) {
    return nombre + " " + apellido + " mayus: " + mayus;
  }else{
    if (apellido != null) {
      return pMayus(nombre) + " " + pMayus(apellido) + " mayus: " + true;
    }else{
        return pMayus(nombre) + " " + true;
    }
  }
}

console.log(nombreCompleto("luis", "quinayas", false));
console.log(nombreCompleto("sebasPPP"));
//***********************   Funciones parametros REST   **************************
// funiones capaces de recibir x parametros y devuelve todos anidados


function identidad(nombre:string, ...parametrosRest:string[]):string {
  /* el metodo join une todos los demas parametros por medio
  una coma y un espacio
  */
  return nombre + " " + parametrosRest.join(", ");
}

let heroes:string = identidad("ironman", "hulk", "thor", "black phanter");
console.log(heroes);
//***********************   Tipo funcion   **************************
function suma(numA:number, numB:number):number {
  return numA + numB;
}
// el () es para indicar los parametros
// despues de () se le asigna => para definir el valor del retorno
let variableFuncion:(x:number, y:number) => any;
variableFuncion = suma;
console.log(variableFuncion);
