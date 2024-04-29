(() => {
    class Avenger {
        name;
        power;

        constructor(name, power) {
            this.name = name;
            this.power = power;
        }
    }

    const hulk = new Avenger()
    console.log(hulk)
})()