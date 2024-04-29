(() => {
    class Avenger {
       
        constructor(name='No name', power=123) {
            this.name = name;
            this.power = power;
        }
    }

    class FlyingAvenger extends Avenger {
        //execute this code when the class is called
        constructor(name, power) {
            super(name, power);
            this.flying = true;
        }
    }

    const hulk = new Avenger('Hulk', 9001)
    const falcon = new FlyingAvenger('Falcon', 500)
    console.log(hulk)
    console.log(falcon)
})()