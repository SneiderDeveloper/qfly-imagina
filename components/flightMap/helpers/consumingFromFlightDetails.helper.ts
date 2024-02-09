import { FlightDetail } from "../models/interfaces"
import { airport } from "./translateAirportData.helper"
import { FlightDetailProp } from "../models/interfaces/flightDetailProp.interface"
import { AIRCRAFT_TYPE_DEFAULT } from "../models/constants"

export const consumingFromFlightDetails = (flightDetails: FlightDetailProp): FlightDetail => {
    const { 
        origin: originAirport, 
        destination: destinationAirport 
    } = airport(flightDetails)

    const lat = flightDetails?.lat ? Number(flightDetails?.lat) : null;
    const lng = flightDetails?.lng ? Number(flightDetails?.lng) : null;

    const flightData = {
        originAirport,
        destinationAirport,
        aircraftType: AIRCRAFT_TYPE_DEFAULT,
        heading: flightDetails?.heading || 0,
        wayPoints: flightDetails?.waypoints || [],
        flightCoordinates: [
            lat,
            lng
        ]
    }

    return flightData
}