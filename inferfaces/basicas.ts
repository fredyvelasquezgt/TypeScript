(() => {

    type Hero = {
        name: string,
        age?:number,
        powers: string[],
        getName?: () => string;
    }

    // interface Hero {

    // }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Time Travel']
    }

    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super Velocidad', 'Fuerza'],
        getName() {
            return this.name;
        }
    }


})()