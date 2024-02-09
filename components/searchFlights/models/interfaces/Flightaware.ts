import {CLASS_TW_RIGHT_THUNMB, CLASS_TW_RIGHT_THUNMB_HIDDEN, MAP_TYPE_FLIGHTAWARE, MAP_TYPE_GOOGLE} from '../defaultModels/constants'
export type RightThumbColor = typeof CLASS_TW_RIGHT_THUNMB_HIDDEN | typeof CLASS_TW_RIGHT_THUNMB;
export type MapType = typeof MAP_TYPE_FLIGHTAWARE | typeof MAP_TYPE_GOOGLE;
export interface DataFlightaware {
  data: Flightaware[]
}

export default interface Flightaware {
  ident: string
  identIcao: string
  identIata: string
  faFlightId: string
  operatorIcao: string
  operatorIata: string
  flightNumber: string
  registration: string
  atcIdent: any
  inboundFaFlightId: string
  codeshares: string[]
  codesharesIata: string[]
  blocked: boolean
  diverted: boolean
  cancelled: boolean
  positionOnly: boolean
  origin: Origin
  destination: Destination
  originAirport: OriginAirport
  destinationAirport: DestinationAirport
  flightStatus: any
  departureDelay: number
  arrivalDelay: number
  filedEte: number
  scheduledOut: string
  estimatedOut: string
  actualOut?: string | null
  scheduledOff: string
  estimatedOff: string
  actualOff?: string | null
  scheduledOn: string
  estimatedOn: string
  estimatedOffUtc: string
  estimatedOnUtc: string
  actualOn?: string | null
  scheduledIn: string
  estimatedIn: string
  actualIn?: string | null
  progressPercent: number
  status: string
  aircraftType: string
  routeDistance: number
  filedAirspeed: number
  filedAltitude: number
  route: string
  baggageClaim?: string | null
  seatsCabinBusiness: any
  seatsCabinCoach: any
  seatsCabinFirst: any
  gateOrigin?: string | null
  gateDestination: string
  terminalOrigin: string
  terminalDestination: string
  distancePercentageCovered: number
  timePercentageCovered: number
  distanceCovered: number
  timeTotalEstimated: number
  waypoints: number[][]
  type: string
  workOrder: any
}

export interface Origin {
  code: string
  codeIcao: string
  codeIata: string
  codeLid: any
  airportInfoUrl: string
}

export interface Destination {
  code: string
  codeIcao: string
  codeIata: string
  codeLid: string
  airportInfoUrl: string
}

export interface OriginAirport {
  fullName: string
  airportName: string
  airportIataCode: string
  airportIcaoCode: string
  timezone: string
  lat: number
  lng: number
  airportCode: string
  oldId: number
  id: number
  createdAt: any
  updatedAt: any
  deletedAt: any
  restoredAt: any
  createdBy: any
  updatedBy: any
  deletedBy: any
  restoredBy: any
  externalId: any
  offlineId: any
  options: any
  isRevisionable: boolean
  isReportable: boolean
  forceDelete: boolean
  defaultInclude: string
  searchableFields: string
  fileFormats: any
}

export interface DestinationAirport {
  fullName: string
  airportName: string
  airportIataCode: string
  airportIcaoCode: string
  timezone: string
  lat: number
  lng: number
  airportCode: string
  oldId: number
  id: number
  createdAt: any
  updatedAt: any
  deletedAt: any
  restoredAt: any
  createdBy: any
  updatedBy: any
  deletedBy: any
  restoredBy: any
  externalId: any
  offlineId: any
  options: any
  isRevisionable: boolean
  isReportable: boolean
  forceDelete: boolean
  defaultInclude: string
  searchableFields: string
  fileFormats: any
}

export interface FlightDetails {
  faFlightId?: string | null;
  mapType: MapType;
  workOrderId?: number | null;
  flightDetails?: {
      lat?: number | null;
      lng?: number | null;
      heading?: number | null;
      waypoints?: number[][];
      origin: {
          title: string;
          lat: number;
          lng: number;
          code: string;
      };
      destination: {
          title: string;
          lat: number;
          lng: number;
          code: string;
      };
  };
}
export interface DisplayRange {
  '--display-range': string;
}