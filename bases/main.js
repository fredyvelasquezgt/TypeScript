"use strict";
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        //define constructor and props
        constructor(name, team, realName) {
            // this.name = name;
            // this.team = team;
            // this.realName = realName;
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    //private name: string; //only acces within this class
    //public team:string; //acces outside of the class
    //public realName?: string;
    Avenger.avgAge = 35; //can access them by reference to the class, not the instance (not necessary to create an instance)
    const antman = new Avenger('Antman', 'teamCap', 'Scott Lang');
    console.log(antman);
    //console.log(Avenger.avgAge)
    console.log(antman.bio());
})();
//# sourceMappingURL=main.js.map