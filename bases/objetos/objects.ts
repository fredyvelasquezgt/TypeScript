(() => {

    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Time Travel']
    }

    flash = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super Fuerza'],
        getNombre() {
            return this.name
        }
    }

})()