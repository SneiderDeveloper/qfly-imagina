import { ComputedRef, Ref } from 'vue';
import Flightaware, { DisplayRange, FlightDetails, RightThumbColor } from './Flightaware';
import momentTimezone from "moment-timezone";
import Search from './Search';

export interface FlightDetailController {
    flight: ComputedRef<Flightaware | null>;
    dateDeparture: ComputedRef<string | undefined>;
    dateArrival: ComputedRef<string | undefined>;
    dateDepartureOff: ComputedRef<string | undefined>;
    dateArrivalOn: ComputedRef<string | undefined>;
    wantedFlightCases: ComputedRef<FlightDetails | undefined>;
    standard: ComputedRef<{ min: number; max: number }>;
    aircraftType: ComputedRef<string>;
    airlines: ComputedRef<string>;
    rightThumbColor: ComputedRef<RightThumbColor>;
    cssVars: ComputedRef<DisplayRange>;
    momentTimezone: momentTimezone.Moment | any;
    totalTravelTime: ComputedRef<string>;
    dateDestinationTimezone: (date: string, formatDate: string) => momentTimezone.Moment | string;
    dateOriginAirportTimezone: (date: string, formatDate: string) => momentTimezone.Moment | string;
    dateNotFound: string;
    methods: {
        minutesToHours: Function;
        delay: Function;
        timezone: (timezone: string | undefined | null) => string;
    };
}

interface MainControllerMethods {
    getFlightaware: () => void;
    redirectWo: () => void;
}

interface MainControllerStore {
    flightList: Flightaware[];
    selectedFligth: Flightaware | null;
    loading: boolean;
}

export interface MainController {
    fields: ComputedRef<Search>;
    methods: MainControllerMethods;
    store: MainControllerStore;
    upcomingFlights: ComputedRef<Flightaware[]>;
    routeFlight: ComputedRef<Flightaware[]>;
    pastFlights: ComputedRef<Flightaware[]>;
    flight: ComputedRef<Flightaware | null>;
    loading: ComputedRef<boolean>;
    flightList: ComputedRef<Flightaware[]>;
    validateFaFlightId: ComputedRef<boolean>;
}


export interface TableColumn {
    name: string;
    align?: string;
    label: string;
    field?: ((row: any) => any) | any; // Adjusted the type here
    format?: (val: any) => any;
    required: boolean;
}

export interface TableCardsControllerProps {
    title: string;
    dataTable: any; // Adjust the type based on the actual data structure
    showWorkOrderColumn: boolean;
}

export interface TableCardsController {
    columns: Ref<TableColumn[]>;
    title: ComputedRef<string>;
    dataTable: ComputedRef<any>;
    minutesToHours: (val: number) => string;
    redirect: (row) => void;
}