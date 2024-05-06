// // Crear interfaces

// interface Auto {
//     encender: boolean,
//     velocidadMaxima: number,
//     acelerar():void
//   }
  
//   // Cree una interfaz para validar el auto (el valor enviado por parametro)
//   const conducirBatimovil = ( auto:Auto ):void => {
//     auto.encender = true;
//     auto.velocidadMaxima = 100;
//     auto.acelerar();
//   }
  
  
//   const batimovil: Auto = {
//     encender:false,
//     velocidadMaxima:0,
//     acelerar(){
//       console.log("...... gogogo!!!");
//     }
//   }
  
//   // Cree una interfaz con que permita utilzar el siguiente objeto
//   // utilizando propiedades opcionales
  
//   interface Guason {
//     reir?: boolean,
//     comer?: boolean,
//     llorar?:boolean
//   }
  
//   const guason: Guason = {
//     reir: true,
//     comer:true,
//     llorar:false
//   }
  
//   const reir = ( guason:Guason ):void => {
//     if( guason.reir ){
//       console.log("JAJAJAJA");
//     }
//   }
  
  
//   // Cree una interfaz para la siguiente funcion
  
//   interface CityFunction {
//     (ciudadanos: string[]):number;
//   }
  
//   const ciudadGotica: CityFunction = ( ciudadanos:string[] ):number => {
//     return ciudadanos.length;
//   }
  
//   // Cree una interfaz que obligue crear una clase
//   // con las siguientes propiedades y metodos
  
//   interface Human {
//     edad: number,
//     sexo: string,
//     nombre: string,
//     estadoCivil: string,
//     imprimirBio(): void
//   }
  
//   /*
//     propiedades:
//       - nombre
//       - edad
//       - sexo
//       - estadoCivil
//       - imprimirBio(): void // en consola una breve descripcion.
//   */
//   class Persona implements Human {
    
//     public edad: number;
//     public sexo: string;
//     public nombre: string;
//     public estadoCivil: string;
//     imprimirBio() {
      
//     }
//   }



// type Carro = {
//     carroceria: string,
//     modelo:string,
//     antibalas: boolean,
//     pasajeros: number,
//     disparar?: () => void; //optional function
// }

// // Objetos
// const batimovil:Carro = {
//   carroceria: "Negra",
//   modelo: "6x6",
//   antibalas: true,
//   pasajeros:4
// };

// const bumblebee: Carro = {
//   carroceria: "Amarillo con negro",
//   modelo: "4x2",
//   antibalas: true,
//   pasajeros:4,
//   disparar(){ // El metodo disparar es opcional
//     console.log("Disparando");
//   }
// };


// // Villanos debe de ser un arreglo de objetos personalizados
// type Villian = {
//     nombre: string,
//     edad: number | undefined,
//     mutante: boolean
// }
// const villanos: Villian[] = [{
//   nombre:"Lex Luthor",
//   edad: 54,
//   mutante:false
// },{
//   nombre: "Erik Magnus Lehnsherr",
//   edad: 49,
//   mutante: true
// },{
//   nombre: "James Logan",
//   edad: undefined,
//   mutante: true
// }];

// // Multiples tipos
// // cree dos tipos, uno para charles y otro para apocalipsis

// type Charles = {
//     poder: string,
//     estatura: number
// }

// const charles: Charles = {
//   poder:"psiquico",
//   estatura: 1.78
// };


// type Apocalipsis = {
//     lider: boolean,
//     miembros: string[]
// }


// const apocalipsis: Apocalipsis = {
//   lider:true,
//   miembros: ["Magneto","Tormenta","Psylocke","Angel"]
// }

// console.log(apocalipsis)
// // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
// let mystique: (Charles | Apocalipsis);

// mystique = charles;
// mystique = apocalipsis;


//TAREA 2
// Funciones Básicas
// function sumar( a: number, b:number ): number{
//   return a + b;
// }

// const contar = ( heroes:string[] ):number => {
//   return heroes.length;
// }
// const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
// contar(superHeroes);

// //Parametros por defecto
// const llamarBatman = ( llamar:boolean = true ): void => {
//   if( llamar ){
//     console.log("Batiseñal activada");
//   }
// }

// llamarBatman();

// // Rest?
// const unirheroes = ( ...personas:string[]): string => {
//   return personas.join(", ");
// }

// // Tipo funcion
// const noHaceNada = ( numero:number, texto:string, booleano:boolean, arreglo: string[] ) => {}

// // Crear el tipo de funcion que acepte la funcion "noHaceNada"
// let noHaceNadaTampoco: (n:number, t:string, b:boolean, a:string[]) => void;
// noHaceNadaTampoco = noHaceNada







// TAREA #1

// TIPADO NORMAL

//(() => {

//   // Tipos
//   const batman:string = 'Bruce';
//   const superman:string = 'Clark';

//   const existe:boolean = false;

//   // Tuplas
//   const parejaHeroes: [string, string] = [batman,superman];
//   const villano: [string, number, boolean] = ['Lex Lutor',5,true];

//   // Arreglos
//   const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];

//   //Enumeraciones
//   enum PoderesHeroes {
//     acuaman = 0,
//     batman = 1,
//     flash = 5,
//     superman = 100
//   }

//     const fuerzaAcuaman: PoderesHeroes = PoderesHeroes.acuaman;
//     const fuerzaBatman: PoderesHeroes = PoderesHeroes.batman;
//     const fuerzaFlash: PoderesHeroes = PoderesHeroes.flash;
//     const fuerzaSuperman: PoderesHeroes = PoderesHeroes.superman;

//   // Retorno de funciones
//   function activar_batiseñal():string{
//     return 'activada';
//   }

//   function pedir_ayuda():void{
//     console.log('Auxilio!!!');
//   }

//   // Aserciones de Tipo
//   const poder: any = '100';
//   const largoDelPoder:number = (poder as string).length;
//   console.log( largoDelPoder );


// })()