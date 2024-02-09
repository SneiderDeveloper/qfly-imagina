export interface AirportDataFlightDetails {
    title: string | null | undefined;
    lat: number | null | undefined;
    lng: number | null | undefined;
    code: string | null | undefined;
}
export interface FlightDetailProp {
    lat?: number | null;
    lng?: number | null;
    heading?: number | null;
    waypoints?: number[][];
    origin: AirportDataFlightDetails;
    destination: AirportDataFlightDetails;
}