"use strict";
//REST parameters
//For the REST of the parameters
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}  `;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log(superman);
})();
