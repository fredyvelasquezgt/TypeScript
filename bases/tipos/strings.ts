(() => {

    const batman:string = 'batman';
    const greenLantern:string = "Green's Lantern";
    const volcanNegro:string = `Heroe: Volcan Negro`;

    console.log(batman.toLowerCase());
    console.log(`I'm ${greenLantern}`);
    console.log(batman[10]?.toUpperCase() || 'no esta presente')
    
})()