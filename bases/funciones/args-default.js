"use strict";
//default parameters
(() => {
    //the optionals arguments should be at the end
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'no last name'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'no last name'}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
//# sourceMappingURL=args-default.js.map