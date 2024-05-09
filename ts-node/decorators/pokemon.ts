//first decorator

function printToConsole(constructor: Function) {
    console.log(constructor)
}

//function that returns function
const printoToConsoleConditional = () => {
    return () => console.log('hola mundo')
}

//class
@printToConsole
export class Pokemon {

    public publicApi: string = 'https://pokeapi.co'

    constructor(
        public name: string;
    ) {

    }
}