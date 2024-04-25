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
//default parameters
(() => {
    //the optionals arguments should be at the end
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'no last name'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'no last name'}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'no last name'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
//REST parameters
//For the REST of the parameters
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}  `;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log(superman);
})();
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `hola ${name}`;
    const saveTheWorld = () => `el mundo esta salvado!`;
    let myFunction;
    // myFunction = 10;
    // console.log(myFunction)
    // myFunction = addNumber;
    // console.log(myFunction(1,2))
    // myFunction = greet;
    // console.log(myFunction('Juan'))
    // myFunction = saveTheWorld;
    // console.log(myFunction())
})();
(() => {
    const hero = 'flash';
    function returnName() {
        return hero;
    }
    const activateSignal = () => {
        return 'batisignal activate';
    };
    // const heroName = () => {
    //     re
    // }
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Time Travel']
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super Velocidad', 'Fuerza']
    };
    // flash = {
    //     name: 'Clark Kent',
    //     age: 60,
    //     powers: ['Super Fuerza'],
    //     getName() {
    //         return this.name
    //     }
    // }
    // console.log(flash)
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Time Travel']
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super Velocidad', 'Fuerza'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    let myCustomVariable = 'Fredy';
    console.log(myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [0]
    };
    console.log(typeof myCustomVariable);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'doctor strange';
    console.log(avenger.charAt(0));
    avenger = 150.2;
    console.log(avenger.toFixed(2));
})();
(() => {
    //const numbers: (string|number|boolean)[] = [1,2,3,4,5,'6',7,8,9,10];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villians = ['Omega Rojo', 'Duende Verde', 'Megatron'];
    villians.forEach(v => console.log(v.toUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = true && false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currrentAudio = AudioLevel.medium;
    console.log(currrentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
    };
    error('help!');
})();
(() => {
    //this is great when strictNullChecks is TRUE
    let isActive = null;
    // let nada: number = undefined;
    // console.log(nada)
    console.log(isActive);
})();
(() => {
    let avenger;
    console.log(avenger);
    const villians = 20;
    if (avenger < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('nos salvamos');
    }
    avenger = Number('55');
    console.log({ avenger });
})();
(() => {
    var _a;
    const batman = 'batman';
    const greenLantern = "Green's Lantern";
    const volcanNegro = `Heroe: Volcan Negro`;
    console.log(batman.toLowerCase());
    console.log(`I'm ${greenLantern}`);
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'no esta presente');
})();
(() => {
    const hero = ['Doctor Strange', 100];
    hero[0] = 50;
    hero[1] = 'Iron Man';
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map