import { Airport } from './airport.interface';
import { Coordinate } from './wayPoint.interface';

export interface FlightDetail {
    heading: number | null;
    aircraftType: string;
    wayPoints:  Coordinate[] | number[][];
    originAirport: Airport;
    destinationAirport: Airport;
    flightCoordinates: (number | null)[];
}