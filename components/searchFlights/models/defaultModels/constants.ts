import { Search } from "../interfaces";

export const MAP_TYPE_FLIGHTAWARE: string = 'flightaware';
export const MAP_TYPE_GOOGLE: string = 'google';
export const ROUTE_PASSENGER = 'qramp.admin.passenger';
export const ROUTE_RAMP = 'qramp.admin.workOrders';
export const CLASS_TW_RIGHT_THUNMB_HIDDEN = 'tw-right-thumb tw-hidden';
export const CLASS_TW_RIGHT_THUNMB = 'tw-right-thumb';
export const SEARCH_FIELDS: Search = {
    search: {
        value: null,
        type: "search",
        props: {
        label: "Search for flight",
      },
    },
}