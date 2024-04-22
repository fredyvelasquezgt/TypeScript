//REST parameters
//For the REST of the parameters
(() => {
    const fullName = (firstName: string, ...restArgs:string[]) => {
        return `${firstName} ${restArgs.join(' ')}  `
    }

    const superman = fullName('Clark', 'Joseph', 'Kent')
    console.log(superman)

})()