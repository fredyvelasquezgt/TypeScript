//first decorator

function printToConsole(constructor: Function) {
    console.log(constructor)
}

//function that returns function
const printoToConsoleConditional = (print:booolean = false): Function => {
    if(print) {
        return printToConsole;
    } else {
        return () => {}
    }
}

//class
@printoToConsoleConditional()
export class Pokemon {

    public publicApi: string = 'https://pokeapi.co'

    constructor(
        public name: string;
    ) {

    }
}