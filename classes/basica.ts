(() => {
    class Avenger {
        //private name: string; //only acces within this class
        //public team:string; //acces outside of the class
        //public realName?: string;
        static avgAge: number = 35; //can access them by reference to the class, not the instance (not necessary to create an instance)
        static getAvgAge() {
            return this.name;
        }

        //define constructor and props
        constructor(
            private name: string, 
            private team: string, 
            public realName?: string,
          ) {
            // this.name = name;
            // this.team = team;
            // this.realName = realName;

        }

        public bio() {
            return `${this.name} (${this.team})`
        }

    }

    const antman: Avenger = new Avenger('Antman', 'teamCap', 'Scott Lang');
    console.log(antman)

    //console.log(Avenger.avgAge)
    console.log(antman.bio())

})()