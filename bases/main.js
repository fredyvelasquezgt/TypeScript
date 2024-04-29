"use strict";
(() => {
    class Avenger {
        //define constructor and props
        constructor(name, team, realName) {
            // this.name = name;
            // this.team = team;
            // this.realName = realName;
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    //private name: string; //only acces within this class
    //public team:string; //acces outside of the class
    //public realName?: string;
    Avenger.avgAge = 35; //can access them by reference to the class, not the instance
    const antman = new Avenger('Antman', 'teamCap', 'Scott Lang');
    console.log(antman);
    console.log(Avenger.avgAge);
})();
//# sourceMappingURL=main.js.map