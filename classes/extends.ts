(() => {

    //inheritance

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

       get fullName() {
           return `${this.name} - ${this.realName}`
       }

       set fullName(name: string) {
           if(name.length < 3) {
               throw new Error("el nombre debe de ser mayor 3 letras")
           }
            this.name = name;
       }


    }

    const wolverine = new Xmen('Wolverine', 'Logan', true)
    console.log(wolverine.fullName)

    wolverine.fullName = 'Fredy'
    console.log(wolverine.fullName)


})()