/*
para importar un namespace hay que agregar
su referencia cons /// <reference path=""/>
*/
/// <reference path="Validaciones/Textos.ts"/>
/// <reference path="Validaciones/Fechas.ts"/>
/*
Importante para que el proyecto reconozca que existen
otros ficheros con namespace hay que crear el
tscongig.json cons tsc -init en la consola y
con la ruta del proyecto
*/

console.log(Texto.validarTexto("holaaa"));
let hoy2 = new Date();
console.log("la fecha de hoy es: ", hoy2);
console.log(Fecha.validarFecha(hoy2));
// da error porque el html no sabe de que existen
/*
SOLUCION 1: agregar en el src los 3 archivos. esta solucion no es muy practica.
SOLUCION 2: ir al terminar tsc --outFile build/app.js Validaciones/Fechas.ts Validaciones/Textos.ts
tsc --outFile nombreCarpetaAcrear/nombreArchivoSalida.js UbicacionCarpeta/Fechas.ts Validaciones/Textos.ts
modificar el html en el src con build/app.js
*/
