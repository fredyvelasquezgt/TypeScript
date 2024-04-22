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
        PoderesHeroes[PoderesHeroes["acuaman"] = 0] = "acuaman";
        PoderesHeroes[PoderesHeroes["batman"] = 1] = "batman";
        PoderesHeroes[PoderesHeroes["flash"] = 5] = "flash";
        PoderesHeroes[PoderesHeroes["superman"] = 100] = "superman";
    })(PoderesHeroes || (PoderesHeroes = {}));
    const fuerzaAcuaman = PoderesHeroes.acuaman;
    const fuerzaBatman = PoderesHeroes.batman;
    const fuerzaFlash = PoderesHeroes.flash;
    const fuerzaSuperman = PoderesHeroes.superman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
