import { MAP_TYPE_FLIGHTAWARE, MAP_TYPE_GOOGLE } from '../models/defaultModels/constants'
import { Flightaware, FlightDetails } from '../models/interfaces'

export default function flightCases(flight: Flightaware | null): FlightDetails | undefined {
    if (!flight?.workOrder) {
        return !flight?.status.includes('Route') 
            ? caseTwo((flight as Flightaware)) 
            : caseThree(flight)
    } else {
        if (!flight?.status.includes('Route')) {
            if (flight.workOrder.flightPosition) {

                return {
                    mapType: caseTwo(flight).mapType,
                    //@ts-ignore
                    flightDetails: {
                        ...flightDetails(flight),
                        lat: flight.workOrder.flightPosition.lastPositionLatitude || null,
                        lng: flight.workOrder.flightPosition.lastPositionLongitude || null,
                        heading: flight.workOrder.flightPosition.lastPositionHeading || 0,
                        waypoints: flight.workOrder.flightPosition.waypoints || []
                    }
                }
            }
            return caseTwo(flight)
        }
        if (flight.status.includes('Route')) {
            return caseOne(flight)
        }
    }

}


const caseOne = (flight: Flightaware): FlightDetails => ({
    faFlightId: flight.faFlightId,
    mapType: MAP_TYPE_GOOGLE,
    workOrderId: flight.workOrder.id,
    flightDetails: { ...flightDetails(flight) },
});


const caseTwo = (flight: Flightaware): FlightDetails => ({
    mapType: MAP_TYPE_GOOGLE,
    flightDetails: { ...flightDetails(flight) },
});


const caseThree = (flight: Flightaware): FlightDetails => ({
    faFlightId: flight.faFlightId,
    mapType: MAP_TYPE_FLIGHTAWARE
});

const flightDetails = (flight: Flightaware) => ({
    origin: {
        title: flight.originAirport.airportName,
        lat: flight.originAirport.lat,
        lng: flight.originAirport.lng,
        code: flight.originAirport.airportCode,
    },
    destination: {
        title: flight.destinationAirport.airportName,
        lat: flight.destinationAirport.lat,
        lng: flight.destinationAirport.lng,
        code: flight.destinationAirport.airportCode
    },
    lat: null,
    lng: null,
    heading: null,
    waypoints: []
})



