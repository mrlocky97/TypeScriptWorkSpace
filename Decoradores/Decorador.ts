/* un decorador es una etiqueta que se pone antes de la funcion,
metodo, propiedad o clase
*/
//********************    decoradores de clase    ********************

function consola(constructor:Function){
  console.log(constructor);
}

@consola// esto lo que hace es enviar como parametro el constructor a fuerza
class Villano{
  constructor(public nombre:string){
  }
}

//********************    decoradores de fabrica    ********************

/*
es una funcion normal que puede resivir parametros pero debe
de regresar algo que pueda ser utilizado como decoradores
*/
function nada():void{}
// esto es un decoredor de fabrica
function imprimirConsola(imprimir:boolean):Function{
  if(imprimir){
    return consola;
  }else{
      return nada;
  }
}

@imprimirConsola(true)
class Villano2{
  constructor(public nombre:string){
  }
}
//********************    Ejemplo de decoradores    ********************

function planVillano(constructor:Function){
  constructor.prototype.imprimirPlan = function(){
    console.log("el plan de ", this.nombre, " es dominar el mundo.");
  }
}

//********************    Decoradores anidados    ********************

function imprimible(constructor:Function){
  constructor.prototype.imprimir = function(){
    console.log(this);
  }
}

// decoredor de clase directo
@imprimible
@planVillano
class Villano3{
  constructor(public nombre:string, public poder:string){}
}

let lex = new Villano3("Lex luthor","inmortal");
(<any>lex).imprimirPlan();
(<any>lex).imprimir();

//********************    Decoradores de metodos    ********************
/*
para evitar de que nuestra funcion se sobreescriba.
los decoradores siempre devuelven funciones
*/
function ebitar(esEbitable:boolean){
  return function(target:any, nombrePropiedad:string, descriptor:PropertyDescriptor){
    descriptor.writable = esEbitable;
  }
}
//esto es un decorador de propiedad y la diferencia es no pasarle por parametro el PropertyDescriptor
function ebitarProp(esEbitable:boolean){
  return function(target:any, nombrePropiedad:string):any|void{
    let descriptor:PropertyDescriptor = {
      writable:esEbitable
    }
    return descriptor;
  }
}

class Coche{
  //********************    Decoradores de propiedades    ********************
  @ebitarProp(true)
  public anno:number;
  constructor(public modelo:string, anno:number){this.anno = anno}

  @ebitar(true)
  imprimirModelo(){
    console.log(`el modelo del coche es ${this.modelo}.`);
  }
}

let coche = new Coche("Roadter", 2021);
coche.imprimirModelo();
coche.imprimirModelo = function(){
  console.log(`el metodo se ha cambiado ahora el modelo es otro.`);
}
coche.imprimirModelo();
console.log(coche);

//********************    Decoradores de parametros    ********************
function decParametro(target:any, metodo:string, index:number){
  console.log(target, metodo, index);
}
class Moto{
  constructor(public marca:string){}
  imprimirMarca(plan:boolean, @decParametro modelo:string):void{
    if(plan){
      console.log(`la marca de la moto es ${this.marca}`);
    }else{
      console.log(modelo);
    }
  }
}
