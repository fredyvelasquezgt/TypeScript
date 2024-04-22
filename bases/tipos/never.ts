(() => {

    const error = (message:string):never => {
        
        if(false) {
            throw new Error(message)

        }
    }

    error('help!')

})()