import { WayPoint, Coordinate } from "../models/interfaces"

export const translateCoordinates = (
    coordinates: Coordinate[] | number[][] = []
): WayPoint[] => {
    if (coordinates.length <= 0) return []
    const wayPoints = (coordinates)
        //@ts-ignore
        .map((coordinate: Coordinate | number[]) => {
            if (Array.isArray(coordinate)) {
                return {
                    lat: coordinate[0],
                    lng: coordinate[1],
                }
            } else {
                return {
                    lat: Number(coordinate?.lat),
                    lng: Number(coordinate?.lon),
                }
            }
        })

    return wayPoints
}