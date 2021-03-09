namespace Texto{
  // la palabra export sirve para que las funciones sean accesibles desde afuera
  export function validarTexto(texto:string):boolean{
    if(texto.length > 3){
      return true;
    }else{
      return false;
    }
  }
}
