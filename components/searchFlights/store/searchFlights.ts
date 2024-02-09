import Vue, { reactive, computed } from 'vue';
import { Flightaware } from '../models/interfaces';
import flyModel from '../models/defaultModels/flyModel';

interface State {
    search: string,
    flightList: Flightaware[],
    selectedFligth: Flightaware | null,
    loading: boolean,
    failRequest: boolean,
    aircraftTypeList: any;
    airlinesList: any; 
}
const state = reactive<State>({
    search: '',
    flightList: [],
    selectedFligth: null,
    loading: false,
    failRequest: false,
    aircraftTypeList: [],
    airlinesList: [], 
})

const store = computed(() => ({
    get search(): string {
        return state.search;
    },
    set search(value: string) {
        state.failRequest = false;
        state.search = value || '';
    },
    get flightList(): Flightaware[] {
        return state.flightList;
    },
    set flightList(value: Flightaware[]) {
        state.flightList = value;
    },
    get selectedFligth(): Flightaware | null {
        return state.selectedFligth;
    },
    get aircraftTypeList(): any {
        return state.aircraftTypeList;
    },
    set aircraftTypeList(value: any) {
        state.aircraftTypeList = value;
    },
    get airlinesList (): any {
        return state.airlinesList ;
    },
    set airlinesList (value: any) {
        state.airlinesList  = value;
    },
    set selectedFligth(value: Flightaware | null) {
        state.selectedFligth = value;
    },
    get loading(): boolean {
        return state.loading;
    },
    set loading(value: boolean) {
        state.loading = value;
    },
    get failRequest(): boolean {
        return state.failRequest;
    },
    set failRequest(value: boolean) {
        state.failRequest = value;
    },
    reset(): void {
        state.search = ''
        state.flightList = []
        state.selectedFligth = null
        state.loading = false
        state.failRequest = false
        state.aircraftTypeList = []
        state.airlinesList = []
    },
})).value


export default store;