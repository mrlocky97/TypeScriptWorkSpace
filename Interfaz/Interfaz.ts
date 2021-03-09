interface Xmen{
  nombre:string,
  poder?:string;
  /*
  se pude hacer que algunas de estas propiedades sean
  opcionales con el variable?:any;
  */
}
function enviarMision(xmen:Xmen){
  console.log(`Enviando a ${xmen.nombre}`);
}

function enviarCuartel(xmen:Xmen){
  console.log(`Enviado al cuartel ${xmen.nombre}`);
}

let wolverine:Xmen = {
  nombre:"wolverine",
  poder:"garras"
};
enviarMision(wolverine);
enviarCuartel(wolverine);

let tormenta:Xmen = {
  nombre:"tormenta"
}
enviarMision(tormenta);
enviarCuartel(tormenta);

// ***************    Metodos en INTERFACES    ***************
interface Persona{
  nombre:string,
  apellido:string,
  edad:number,
  nombreCompleto?():void;//metodo opcional
}
// esto es un objeto que cumple con la interfaz Persona
let persona1:Persona = {
  nombre:"sebastian",
  apellido:"quinayas",
  edad:23,
  nombreCompleto(){
    console.log(`Nombre completo: ${this.nombre} ${this.apellido}`);
  }
};

function enviarCasa(per:Persona){
  console.log(`Enviado a casa a ${per.nombre} ${per.apellido}`);
}
enviarCasa(persona1);

// ***************    Interfaces en las clases    ***************

class Estudiante implements Persona{
  instituto: string;
  nombre: string;
  apellido: string;
  edad: number;
  nombreCompleto?(): void {
    console.log(`Nombre completo: ${this.nombre} ${this.apellido}`);
  }
}

// ***************    Interfaces en las funciones    ***************
// las INTERFACES no existen en typescript
interface DosNum{
  (num1:number, num2:number):number
}
let sumas:DosNum;
sumas = function(num1:number, num2:number):number{
  return num1 + num2;
}

let resta:DosNum;
resta = function(num1:number, num2:number):number{
  return num1 - num2;
}

let multiplicar:DosNum;
multiplicar = function(num1:number, num2:number):number{
  return num1 * num2;
}
