(() => {

    interface Client {
        name: string,
        age?: number,
        address?: Address
    }

    interface Address {
        id: number,
        zip: string,
        city:string
    }

    const client: Client = {
        name: 'Fredy',
        age: 25,
        address: {
            id: 125,
            zip: 'ABC',
            city: 'Ottawa'

        }
    }

    const client2: Client = {
        name: "Melissa", 
        age: 30,
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'ABC'
        }
    }


})()