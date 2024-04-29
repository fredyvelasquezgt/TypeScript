(() => {
    class Avenger {
        private name: string; //only acces within this class
        public team:string; //acces outside of the class
        public realName?: string;
        static avgAge: number = 35; //can access them by reference to the class, not the instance

        constructor(name: string, team: string, realName?: string) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }

    const antman: Avenger = new Avenger('Antman', 'teamCap');
    console.log(antman)

    console.log(Avenger.avgAge)

})()