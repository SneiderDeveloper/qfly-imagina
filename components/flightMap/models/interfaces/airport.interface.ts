import { AirportDataFlightDetails } from './flightDetailProp.interface'

export interface AirportFlightPosition {
    airportName: string;
    airportCode: string;
    lat: number;
    lng: number;
}
export interface AirportProp {
    origin?: AirportDataFlightDetails;
    destination?: AirportDataFlightDetails;
    inboundOriginAirport?: AirportFlightPosition;
    outboundDestinationAirport?: AirportFlightPosition;
}

export interface Airport {
    title: string | undefined | null;
    coordinate: (number | null)[];
    code: string | undefined | null;
}

export interface AirportData {
    origin: Airport;
    destination: Airport;
}