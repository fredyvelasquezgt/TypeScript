"use strict";
// Objetos
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
console.log(apocalipsis);
// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique;
mystique = charles;
mystique = apocalipsis;






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
//# sourceMappingURL=app.js.map