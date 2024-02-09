const airport = {
    title: '',
    coordinate: [],
    code: ''
}

export const flightDetailModel = {
    heading: 0, 
    aircraftType: '', 
    wayPoints: [],
    originAirport: {
        ...airport
    },
    destinationAirport: {
        ...airport
    },
    flightCoordinates: [],
}