/* para que estos archivos sean modulos tienen que tener la
palabra export*/

export let mensajes:string[] = [
  "texto corto",
  "este texto es muy largo"
];

export function obtenerError(numError:number):string{
  return mensajes[numError];
}
