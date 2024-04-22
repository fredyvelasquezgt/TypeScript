"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let PoderesHeroes;
    (function (PoderesHeroes) {
        PoderesHeroes[PoderesHeroes["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        PoderesHeroes[PoderesHeroes["fuerzaBatman"] = 1] = "fuerzaBatman";
        PoderesHeroes[PoderesHeroes["fuerzaFlash"] = 5] = "fuerzaFlash";
        PoderesHeroes[PoderesHeroes["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(PoderesHeroes || (PoderesHeroes = {}));
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = Number(poder.length);
    console.log(largoDelPoder);
})();
