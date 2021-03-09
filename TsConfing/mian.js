/*!
Derechos de autor: Juan sebastian
Version 0.0.1
*/
var heroe = "sebas";
var edad = 23;
console.log(heroe);
console.log(edad);
// para crear el archivo tsConfig tsc -init en la consola
// ***************    depurar en typescript   ***************
function imprimir(heroe, edad) {
    console.log("El heroe se llama: " + heroe + "\nEdad: ", edad);
}
imprimir(heroe, edad);
/* para encontrar el error en el archivo type typescript modificar el tsConfig
cambier el sourceMap a true y acontinuacion hacer un tsc en la consola para generar
un archivo.ts.map. ir al navegador en la pestaña sigiente de la consola abrir el archivo
.ts y hacer un break point le damos al pause y racargamos la pagina */
// ***************    Borrar comentarios del js   ***************
/* esto sirve para que en el js no aparasca nuestros apuntes y la gente no sepa que
hace la funcion */
/* modificar en el tsConfig "removeComments" : false
hacer un tsc en la consola para aplicar los cambios
o tcs app.ts --removeComments*/
// ***************    Incluir y excluir archivos   ***************
/*
para compilar solo los archivos que queremos y exluir el resto
ir a tsConfig una ver salimos del compilerOptions }, "include:["nombre de la carpeta"]
ejemplo "app/**/ /*" ejecuta todas las carpetas dentro de app y todos los archivos
una ver salgamos del include], "exclude":["node_modules", "src/"] una vez terminado todo esto ir
a la consola y hacer un tsc para aplicar los cambios
*/
// ***************    Archivos de salida   ***************
/* es un archivo al cual le podemos espesificar que puede juntar para devolverlo en un
solo archivo */
console.log("Hola mundo esto es una prieba de salida de outFile.");
