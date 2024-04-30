(() => {

    abstract class Mutante { 
        constructor(
            public name: string,
            public realName: string
        ){

        }
    }

    class Xmen extends Mutante {
        salvarMundo() {
            return 'mundo a salvo!'
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return 'mundo conquistado';
        }
    }

    const wolverine = new Xmen('Wolvernie', 'Logan');
    const magnetdo = new Villian("Magneto", 'Magnus');

    console.log(wolverine.salvarMundo())


    const printName = (character: Mutante) => {
        console.log(character.name)
    }

})()