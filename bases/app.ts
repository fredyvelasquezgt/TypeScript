// Funciones Básicas
function sumar( a, b ){
  return a + b;
}

const contar = ( heroes ) => {
  return heroes.length;
}
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
const llamarBatman = ( llamar ) => {
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
const unirheroes = ( personas ) => {
  return personas.join(", ");
}

// Tipo funcion
const noHaceNada = ( numero, texto, booleano, arreglo )=> {}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada







// TAREA #1

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

