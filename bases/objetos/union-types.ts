(() => {

    type Hero = {
        name: string,
        age?:number,
        powers: number[],
        getName?: () => string;
    }

    let myCustomVariable: (string | number | Hero) = 'Fredy';
    console.log(myCustomVariable)

    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [0]
    }

    console.log(typeof myCustomVariable)

})()