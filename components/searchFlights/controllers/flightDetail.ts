import { computed, ComputedRef } from 'vue';
import store from '../store/searchFlights';
import momentTimezone from "moment-timezone";
import minutesToHours from '../helpers/minutesToHours'
import delay from '../helpers/delay'
import { 
    DisplayRange, 
    FlightDetailController, 
    FlightDetails, 
    Flightaware, 
    RightThumbColor } from '../models/interfaces';
import flightCases from '../helpers/filgthCases';
import { CLASS_TW_RIGHT_THUNMB, CLASS_TW_RIGHT_THUNMB_HIDDEN } from '../models/defaultModels/constants';

export default function flightDetailController(): FlightDetailController { 
    const dateNotFound = 'Date not found';
    const flight = computed<Flightaware | null>(() => store.selectedFligth);
    const dateDeparture = computed<string | undefined>(() => flight.value?.actualOut || flight.value?.estimatedOut || flight.value?.scheduledOut);
    const dateArrival = computed<string | undefined>(() => flight.value?.actualIn || flight.value?.estimatedIn || flight.value?.scheduledIn);
    const dateDepartureOff = computed<string | undefined>(() => flight.value?.actualOff || flight.value?.estimatedOff || flight.value?.scheduledOff);
    const dateArrivalOn = computed<string | undefined>(() => flight.value?.actualOn || flight.value?.estimatedOn || flight.value?.scheduledOn);
    const wantedFlightCases = computed<FlightDetails | undefined>(() => flightCases(flight.value));
    const totalTravelTime = computed<string>(() => {
        const inDate = momentTimezone(dateArrival.value).tz((flight.value as any).destinationAirport.timezone);
        const outDate = momentTimezone(dateDeparture.value).tz((flight.value as any).originAirport.timezone);
        const timeDifference = momentTimezone.duration(inDate.diff(outDate));
        const hours = timeDifference.hours() || 0;
        const minutes = timeDifference.minutes() || 0;
        if(hours > 0 && minutes > 0) {
            return `${hours} hour ${minutes} minutes`;
        }
        return `${hours} hour`;
    })
    const dateDestinationTimezone = (date: string | undefined, formatDate = '') => {
        const dateTimezone = momentTimezone(date).tz((flight.value as any).destinationAirport.timezone)
        return dateTimezone.isValid() ? dateTimezone.format(formatDate) : dateNotFound;
    } 
    const dateOriginAirportTimezone = (date: string | undefined, formatDate = '') => {
        const dateTimezone = momentTimezone(date).tz((flight.value as any).originAirport.timezone)
        return dateTimezone.isValid() ? dateTimezone.format(formatDate) : dateNotFound;
    }
    const standard = computed<{
        min: number;
        max: number;
    }>(() => ({
        min: 0,
        max: flight.value?.distancePercentageCovered || 0,
    }))
    const aircraftType = computed<string>(() => {
        const aircraftType = store.aircraftTypeList.find(item => item.model == flight.value?.aircraftType);
        if (aircraftType) {
            return `${aircraftType.fullName} (${aircraftType.description})(${aircraftType.model})`
        }
        return flight.value?.aircraftType || '';
    });
    const airlines = computed<string>(() => {
        const airlines = store.airlinesList.find(item => item.airlineIcaoCode == flight.value?.operatorIcao);
        if (airlines) {
            return `${airlines.airlineName}`
        }
        return flight.value?.operatorIcao || '';
    })
    const rightThumbColor = computed<RightThumbColor>(() => {
            if (standard.value.max >= 100) {
                return CLASS_TW_RIGHT_THUNMB_HIDDEN;
            }
            return CLASS_TW_RIGHT_THUNMB;
        })
    const cssVars = computed<DisplayRange>(() => {
        return {
            '--display-range': standard.value.max === 0 ? 'none' : 'block',
        }
    })
    const methods = {
        minutesToHours,
        delay,
        timezone(timezone: string | undefined | null = null): string {
            if (!timezone) return '';
            return momentTimezone.tz(timezone).format("z");
        },
    }

    return {
        methods,
        flight,
        standard,
        rightThumbColor,
        aircraftType,
        airlines,
        momentTimezone,
        dateDeparture,
        dateArrival,
        dateDepartureOff,
        dateArrivalOn,
        cssVars,
        wantedFlightCases,
        totalTravelTime,
        dateDestinationTimezone,
        dateOriginAirportTimezone,
        dateNotFound
    }
}