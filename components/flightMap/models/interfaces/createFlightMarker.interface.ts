export interface CreateFlightMarkerProps {
    id: string;
    rotation: number;
    flightCoordinates: (number | null)[];
    aircraftType?: string;
}