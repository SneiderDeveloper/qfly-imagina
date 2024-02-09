import { AirportProp, AirportData } from '../models/interfaces/airport.interface'

export const airport = (flight: AirportProp): AirportData => {
    const inboundOriginAirport = flight?.inboundOriginAirport
    const outboundDestinationAirport  = flight?.outboundDestinationAirport

    const originAirport = flight?.origin
    const destinationAirport = flight?.destination
    
    const origin = [
        Number(originAirport?.lat || inboundOriginAirport?.lat) || null, 
        Number(originAirport?.lng || inboundOriginAirport?.lng) || null,
    ]
    const destination = [
        Number(destinationAirport?.lat || outboundDestinationAirport?.lat) || null,
        Number(destinationAirport?.lng || outboundDestinationAirport?.lng) || null,
    ]

    return {
        origin: {
            title: originAirport?.title || inboundOriginAirport?.airportName,
            coordinate: origin,
            code: originAirport?.code || inboundOriginAirport?.airportCode
        },
        destination: {
            title: destinationAirport?.title || outboundDestinationAirport?.airportName,
            coordinate: destination,
            code: destinationAirport?.code || outboundDestinationAirport?.airportCode
        }
    }
}