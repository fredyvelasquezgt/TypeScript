(() => {

    let avenger:any = 123;
    let exists;
    let power;

    avenger = 'doctor strange';
    console.log((avenger as string).charAt(0));

    avenger = 150.2;
    console.log((<number>avenger).toFixed(2))

})()