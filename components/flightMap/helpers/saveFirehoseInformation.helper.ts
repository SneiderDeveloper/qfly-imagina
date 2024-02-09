import { FlightFlifo, FlightPosition } from '../models/interfaces'

export const saveFirehoseInformation = <T extends FlightPosition | FlightFlifo> (
    type: string, 
    list: T[], 
    flight: T 
): T[] => {
    if (!list) return []
    const listFlight = [ ...list ]
    
    if (flight?.type === type) {
        const update = element => element?.id === flight?.id
        const index = listFlight?.findIndex(update)

        if (index >= 0) {
            listFlight[index] = flight
            return listFlight
        }

        listFlight.push(flight)

        return listFlight
    }

    return listFlight
}