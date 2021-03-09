/*
es una agrupacion de propiedades que estan de manera global
*/
// los namespace name son camelCase la prumera en mayuscula
namespace Validador{
  // la palabra export sirve para que las funciones sean accesibles desde afuera
  export function validarTexto(texto:string):boolean{
    if(texto.length > 3){
      return true;
    }else{
      return false;
    }
  }

  export function validarFecha(fecha:Date):boolean{
    if(isNaN(fecha.valueOf())){
      return false;
    }else{
        return true;
    }
  }
}

console.log(Validador.validarTexto("holaaa"));
let hoy = new Date();
console.log("la fecha de hoy es: ", hoy);
console.log(Validador.validarFecha(hoy));
