(() => {

    let flash: {name:string, age?:number, powers: string[], getName?:() => string} = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Time Travel']
    }

    let superman: {name:string, age?:number, powers: string[], getName?:() => string} = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super Velocidad', 'Fuerza']
    }



    // flash = {
    //     name: 'Clark Kent',
    //     age: 60,
    //     powers: ['Super Fuerza'],
    //     getName() {
    //         return this.name
    //     }
    // }

    // console.log(flash)

})()