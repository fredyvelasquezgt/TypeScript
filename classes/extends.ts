(() => {

    class Avenger { 

        constructor(
            public name: string,
            public realName: string,
        ) {

            console.log('constructor avenger llamado')
        }

        private getFullName() {
            return `${this.name} ${this.realName}`
        }
    }

    //has all the things of Avenger (include restrictions)
    class Xmen extends Avenger { 


    }

    const wolverine = new Xmen('Wolverine', 'Logan')
    console.log(wolverine)


})()