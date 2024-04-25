"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Time Travel']
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super Velocidad', 'Fuerza'],
        getName() {
            return this.name;
        }
    };
})();
