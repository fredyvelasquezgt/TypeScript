(() => {
    //Objects
    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers: Avengers = {
        nick: 'Samuel L Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    }

    // const {poder, vision} = avenger
    // console.log(poder.toFixed(), vision.toUpperCase())

    const printAvenger = ({vision, ...resto}:Avengers) => {
        console.log(vision, resto)
    }

    const avengersArr: string[] = ['Cap America', 'Iron Man', 'Hulk']
    const [, ironman,] = avengersArr;
    console.log({ironman})

})()