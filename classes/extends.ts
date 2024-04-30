(() => {

    class Avenger { 

        constructor(
            public name?: string,
            public realName?: string,
        ) {

            console.log('constructor avenger llamado')
        }

        private getFullName() {
            return `${this.name} ${this.realName}`
        }
    }

    //has all the things of Avenger (include restrictions)
    class Xmen extends Avenger { 

        constructor(
            name: string,
            realName: string,
            public isMutant: boolean 
        ) {
            super(name, realName)
            console.log('constructor xmen llamado')
        }


    }

    const wolverine = new Xmen('Wolverine', 'Logan', true)
    console.log(wolverine)


})()