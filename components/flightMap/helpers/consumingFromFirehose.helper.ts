import { airport } from './translateAirportData.helper'
import { FlightPosition, FlightFlifo, FlightDetail, FlightDetailProp  } from '../models/interfaces'

export const consumingFromFirehose = (
    positionTypeFlight: FlightPosition | undefined, 
    flifoTypeFlight: FlightFlifo | undefined, 
    flightDetails: FlightDetailProp
): FlightDetail => {
    const { 
        origin: originAirport, 
        destination: destinationAirport 
    } = airport(flightDetails)

    const lat = positionTypeFlight?.lat ? Number(positionTypeFlight?.lat) : null;
    const lon = positionTypeFlight?.lon ? Number(positionTypeFlight?.lon) : null;
    const wayPoints = flifoTypeFlight?.waypoints || [];
    const heading = Number(positionTypeFlight?.heading);
    const aircraftType = positionTypeFlight?.aircrafttype || ''
    const flightCoordinates = [ lat, lon ]
    
    const flightData = {
        originAirport,
        destinationAirport,
        aircraftType,
        heading,
        wayPoints,
        flightCoordinates,
    }
    return flightData
}