//**********    Objetos   **********
//declaracion de objetos
let objeto = {
  nombre: "sebastian",
  edad: 23,
  poderes: ["invisible", "volar"]
};
// objeto con parametros espesificos y obligatorios
let objetoEspecifico:{nombre:string, edad:number, poderes:string[]} = {
  nombre: "luis",
  edad: 19,
  poderes:["volar"]
};
//metodos dentro de los Objetos
/*
getNombre:()=>string a partir de los : es para espesificar que es un metodo
si los () estan vacios ese metodo no recibe parametros
y para decirle que devuelva algo => y el tipo de dato que devuelve
*/
let objetoMetodos:{nombre:string, edad:number, getNombre:()=>string} = {
  nombre: "luis",
  edad: 19,
  getNombre(){
    return this.nombre;
  }
};
//**********    Objetos personalizables   **********
/*
la palabra type que permite crear un tipo de objeto personalizables
en este caso estamos declarando un tipo de dato y siempre empieza con la primera
letra en mayusculas
*/

type Hero = {
  nombre:string,
  edad:number,
  poderes:any[],
  getNombre:()=>string
};

let superman:Hero ={
  nombre: "sebas",
  edad: 23,
  poderes: ["invisible", 47],
  getNombre(){
    return this.nombre;
  }
}

//**********    Multiples tipos permitidos    **********
let loquesea:any = true;
loquesea = 10;
// se puede limitar a 2 tipos de datos o los que sean ejemplo
let loquesea2: string | number | Hero = "hola";
loquesea2 = 23;
loquesea2 = {
  nombre: "ppp",
  edad: 33,
  poderes: ["invisible", 47],
  getNombre(){
    return this.nombre;
  }
}

//**********    Revisar el tipo de un objeto o variable    **********
let algo:any = 123;
console.log(typeof algo);

if (typeof algo == "number") {
  console.log("La variable algo es un numero");
}
