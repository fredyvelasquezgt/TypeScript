import { getPokemon } from './generics/get-pokemon';



getPokemon(4)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
    .finally(() => console.log('fin de getPokemon'))

