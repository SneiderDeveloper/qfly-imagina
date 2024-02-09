
export interface Icon {
    path?: string;
    fillColor?: string;
    fillOpacity?: number;
    strokeWeight?: number;
    scale?: number;
    rotation?: number;
    anchor?: google.maps.Point;
    strokeColor?: string;
    zIndex?: number;
}

export interface MarkerIcon {
    path: string;
    fillColor: string;
    fillOpacity: number;
    strokeWeight: number;
    scale: number;
    rotation: number;
    anchor: google.maps.Point;
    strokeColor: string;
    zIndex: number;
}

export interface LabelProperties {
    text: string,
    color: string,
    fontSize: string,
    fontWeight: string,
}