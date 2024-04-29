(() => {
    type Avenger = {
        name: string,
        weapon: string,
    }

    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'ArmorSuit'
    }
    const capAmerica: Avenger = {
        name: 'Capitan America',
        weapon: 'Shield'
    }

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers = [ironman, thor, capAmerica]

    for (const avenger of avengers) {
        console.log(avenger)
    }

})()