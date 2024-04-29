"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35; //can access them by reference to the class, not the instance
    const antman = new Avenger('Antman', 'teamCap');
    console.log(antman);
    console.log(Avenger.avgAge);
})();
//# sourceMappingURL=main.js.map