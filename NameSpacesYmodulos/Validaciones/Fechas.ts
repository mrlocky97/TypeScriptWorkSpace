namespace Fecha{
  export function validarFecha(fecha:Date):boolean{
    if(isNaN(fecha.valueOf())){
      return false;
    }else{
        return true;
    }
  }
}
