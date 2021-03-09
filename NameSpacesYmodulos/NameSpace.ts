/*
es una agrupacion de propiedades que estan de manera global
*/
// los namespace name son camelCase la prumera en mayuscula
namespace Validador{

}
function validarTexto(texto:string):boolean{
  if(texto.length > 3){
    return true;
  }else{
    return false;
  }
}
