import { printObject, genericFunction, genericFunctionArrow } from './generics/generics';
import { Hero } from './interfaces/hero';


// printObject(123)

// printObject({
//     a:1,
//     b:2
// })

// printObject("Hola mundo")

// console.log(genericFunctionArrow(123))
// console.log(genericFunction('hello world').)
// console.log(genericFunction(123))

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLeve: 130
}

console.log(genericFunctionArrow<Hero>(deadpool));