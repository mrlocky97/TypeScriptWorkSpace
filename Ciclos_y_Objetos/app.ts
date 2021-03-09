 // las constantes su nombre son en mayusculas
 // las constantes nopueden cambiar su valor

 const OPCIONES:string = "Activo";

 // ***************   Templates literales ***************
// permite crear string de otra forma
// antes
let nombre1:string = "neska";
let nombre2:string = 'robin';
/* nuevo son los `` nos permite hacer miltilinea y se puede introducir variables
de esta manera ${}
*/
function imprimir():String{
  return OPCIONES;
}
let mensaje:string = `linea1
linea2 Hola ${nombre1}
linea3 ${nombre2} es un heroe.
la sumas de 5 + 7 es: ${5 + 7}
opciones: ${imprimir()}`;
console.log(mensaje);

// ***************   Funciones de flecha ***************
function sumas(a:number, b:number):number{
  return a + b;
}
console.log(sumas(9,7));
//function lamda
let suma = (a:number,b:number):number=>a+b;
console.log(suma(1,5));

let darOrden = (orden:string):string=>`Hulsk ${orden}`;
console.log(darOrden("Smash."));

let capitanAmerica = {
  nombre: "Hulk",
  darOrdenHulk:function(){
    let self = this;// para que el  nuevo puntero sepa que es this
    setTimeout(function(){
      console.log(`${self.nombre} smash!!!`);
    },1)
    //console.log(`${this.nombre} smash!!!`);
  }
};
capitanAmerica.darOrdenHulk();
// una de las propiedades de las funcines lamda no cambian el objeto this
let capitanAmerica2 = {
  nombre: "Hulk",
  darOrdenHulk:function(){
    setTimeout(()=>
      console.log(`${this.nombre} smash 2!!!`),
      1);
  }
};

capitanAmerica2.darOrdenHulk();

// ***************   Destruturacion de objetos    ***************
let advengers = {
  nick:"Samuel Jackson",
  ironman:"Robert Downet Jr",
  vision:"Paul Bettany"
};
// extrae las variables del objeto
/*
let nick = advengers.nick;
let ironman = advengers.ironman;
let vision = advengers.vision;
*/
// destructuring of objects
let {nick, ironman, vision} = advengers;
console.log(nick);
console.log(ironman);
console.log(vision);
// asignar otro nombre de variable
console.log("\n**********************\n");

let {nick:warmachine, ironman:warmachine2, vision:warmachine3} = advengers;
console.log(warmachine);
console.log(warmachine2);
console.log(warmachine3);
// ***************   Destruturacion de array    ***************
let vengadores:string[] = ["samuel Jackson", "Robert Dowey Jr", "Paul Bettany"];
let[vengador1, vengador2, vengador3]  = vengadores;
console.log("\n**********************\n");
console.log(vengador1);
console.log(vengador2);
console.log(vengador3);

// ***************  For of    ***************
let thor = {
  nombre:"thor",
  arma:"martillo"
};
let ironman32 = {
  nombre:"ironman",
  arma:"armorduit"
};
let capi = {
  nombre:"capitan america",
  arma:"escudo"
};
let avengers = [thor, ironman32, capi];
for(let i in avengers){
  console.log(avengers[i].nombre);
}
console.log("\n**********************\n");

console.log("los heroes son:  ");

for(let i = 0; i < avengers.length; i++){
  console.log(avengers[i].nombre);
}
console.log("\n**********************\n");
// este for es como un foreach
for(let x of avengers){
  console.log(x.nombre);
}
// ***************  Clases   ***************
class Avenger{
  nombre: string;
  poder: string;
  constructor(nom:string, pod:string){
    this.nombre = nom;
    this.poder = pod;
  }
}
let hulk = new Avenger("hulk", "fuerza");
console.log(hulk);

class AvengerVolador extends Avenger{
  volar: boolean;
  constructor(nombre:string, poder:string, vol:boolean){
    super(nombre, poder);
    this.volar = vol;
  }
}
let alcon = new AvengerVolador("falcon", "armas", true);

console.log(alcon)
