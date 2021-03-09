class Avenger{
  public nombre:string;
  protected equipo:string;
  private nombreReal:string;
  public pelea:boolean;
  public victorias:number;
  constructor(nombre:string, equipo:string, nomR:string, pelea:boolean, victorias:number){
    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nomR;
    this.pelea = pelea;
    this.victorias = victorias;
  }
  public get getNombreReal():string {
    return this.nombreReal;
  }
  public set setNombreReal(nombreNuevo:string){
    this.nombreReal = nombreNuevo;
  }
}
let antMan:Avenger = new Avenger("antman", "ironman", "sebas", true, 7);
console.log(antMan);
antMan.nombre = "nick";
console.log(antMan.getNombreReal);
antMan.setNombreReal = "juan";
console.log("nuevo nombre: ",antMan.getNombreReal);


class Persona{
  private nombre:string;
  private edad:number
  constructor(nombre:string, edad:number){
    this.nombre = nombre;
    this.edad = edad;
  }
  public get getNombre():string{
    return this.nombre;
  }
  public set setNombre(nuevoNombre:string){
    this.nombre = nuevoNombre;
  }
  public get getEdad():number{
    return this.edad;
  }
  public set setEdad(nuevaEdad:number){
    this.edad = nuevaEdad;
  }
}
class Xmen extends Persona{
  private poder:string
  constructor(nombre:string, edad:number, poder:string){
    super(nombre, edad);
    this.poder = poder;
  }
  public get getPoder():string{
    return this.poder;
  }
  public set Poder(nuevoPoder:string){
    this.poder = nuevoPoder;
  }

  static suma(a:number, b:number):number{
    return a + b;
  }
}
let lovezno = new Xmen("juan", 23, "garras");
console.log(lovezno.getEdad);
lovezno.setEdad = 22;
console.log(lovezno.getEdad);

//***************   metodos y variables staticas  ***************
/*
se pueden llamar desde cualquier parte sin crear el objeto en si solo con
hacer referencia a la clase.metodo o propiedad
*/
console.log(Xmen.suma(4,6));

//***************   Clases abstractas  ***************
abstract class Mutantes{
  private nombre:string;
  private bando:string;
  constructor(nombre:string, bando:string){
    this.nombre = nombre;
    this.bando = bando;
  }
  public get getNombre():string{
    return this.nombre;
  }
  public set setNombre(nuevoNombre:string){
    this.nombre = nuevoNombre;
  }
  public get getBando():string{
    return this.bando;
  }
  public set setBando(nuevoBando:string){
    this.bando = nuevoBando;
  }
}

/*
unas de las porpiedades de las clases abstractas es
no se pueden crear instancias de estas.
son como un molde para las clases y heredar sus propiedades
a sus hijas
*/

class Villano extends Mutantes{
  private poder:string;
  constructor(nombre:string, bando:string, poder:string){
    super(nombre, bando);
    this.poder = poder;
  }
  public get getPoder():string{
    return this.poder;
  }
  public set setPoder(nuevoPoder:string){
    this.poder = nuevoPoder;
  }
}

let tanos = new Villano("tanos", "malo", "guante");
console.log(`nombre: ${tanos.getNombre}
  bando: ${tanos.getBando}
  poder: ${tanos.getPoder}`);

//***************   constructores privados  ***************
class Apocalipsis{
  static instancia:Apocalipsis;
  public nombre:string;
  private constructor(nombre:string){
    this.nombre = nombre;
  }
  static llamarApocalipsis(nombre:string){
    if(!Apocalipsis.instancia){// si no existe apocalipsis
      Apocalipsis.instancia = new Apocalipsis(nombre);
    }
    return Apocalipsis.instancia;
  }
}
// como no se puede llamar al constructor porque es privado
let apocalipsis = Apocalipsis.llamarApocalipsis("Juan");
console.log(apocalipsis);
/*
la idea de esto es que solo exista un solo objeto en todo el programa
y no se puedan crear mas instancias de esa clases
*/
