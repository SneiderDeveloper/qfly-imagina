<template>
    <div>
        <div>
            <div class="tw-flex tw-border-b tw-border-gray-400 tw-items-end">
                <div>
                    <p class="tw-text-2xl tw-font-semibold">Flight Details</p>
                </div>
                <div class="tw-ml-auto">
                    <p class="tw-text-xs tw-text-gray-400 tw-hidden">updated 46 seconds ago</p>
                </div>
            </div>

            <div class="tw-border tw-w-full tw-rounded-md tw-mx-1 tw-text-lg tw-mt-2">
                <div class="tw-bg-gray-300 tw-p-3">
                    Departure Times
                </div>
                <div class="tw-grid tw-grid-cols-2 tw-gap-4 tw-border-b tw-py-1">
                    <div class="tw-px-4">
                        <p>Gate Departure</p>
                        <p class="tw-font-semibold">
                            <span>{{ momentTimezone(dateDeparture).tz(flight.originAirport.timezone).format("hh:mm A") }}
                                {{ methods.timezone(flight.originAirport.timezone) }}</span>
                        </p>
                        <p class="tw-text-xs">Scheduled <span>{{ momentTimezone(flight.scheduledOut).tz(flight.originAirport.timezone).format("hh:mm A") }}
                                {{ methods.timezone(flight.originAirport.timezone) }}</span></p>
                    </div>
                    <div class="tw-px-4">
                        <p>Takeoff</p>
                        <p class="tw-font-semibold">
                            <span>{{  momentTimezone(dateDepartureOff).tz(flight.originAirport.timezone).format("hh:mm A") }}
                                {{ methods.timezone(flight.originAirport.timezone) }}
                                </span>
                            </p>
                        <p class="tw-text-xs">
                            Scheduled <span>{{ momentTimezone(flight.scheduledOff).tz(flight.originAirport.timezone).format("hh:mm A") }}
                                {{ methods.timezone(flight.originAirport.timezone) }}
                                </span>
                            </p>
                    </div>
                </div>
                <div class="tw-px-4 tw-text-sm tw-py-2 tw-hidden">
                    <p>Taxi Time: 14 minutes</p>
                    <p>Average Delay: Less than 10 minutes</p>
                </div>
                <div class="tw-bg-gray-300 tw-p-3">
                    Arrival Times
                </div>
                <div class="tw-grid tw-grid-cols-2 tw-gap-4 tw-border-b tw-py-1">
                    <div class="tw-px-4">
                        <p>Landing</p>
                        <p class="tw-font-semibold">
                            <span>{{ momentTimezone(dateArrivalOn).tz(flight.destinationAirport.timezone).format("hh:mm A") }}
                                {{ methods.timezone(flight.destinationAirport.timezone) }}</span>
                        </p>
                        <p class="tw-text-xs"> Scheduled 
                            <span>{{ momentTimezone(flight.scheduledOn).tz(flight.destinationAirport.timezone).format("hh:mm A") }}
                                {{ methods.timezone(flight.destinationAirport.timezone) }}</span>
                        </p>
                    </div>
                    <div class="tw-px-4">
                        <p>Gate Arrival</p>
                        <p class="tw-font-semibold">
                            <span>{{ momentTimezone(dateArrival).tz(flight.destinationAirport.timezone).format("hh:mm A") }}
                                {{ methods.timezone(flight.destinationAirport.timezone) }}</span>
                        </p>
                        <p class="tw-text-xs">Scheduled 
                            <span>{{ momentTimezone(flight.scheduledIn).tz(flight.destinationAirport.timezone).format("hh:mm A") }}
                                {{ methods.timezone(flight.destinationAirport.timezone) }}</span>
                        </p>
                    </div>
                </div>
                <div class="tw-px-4 tw-text-sm tw-py-2 tw-hidden">
                    <p>Taxi Time: 6 minutes</p>
                    <p>Average Delay: Less than 10 minutes</p>
                </div>
            </div>
        </div>
        <div class="tw-py-4">
            <div class="tw-flex tw-border-b tw-border-gray-400 tw-items-end">
                <div>
                    <p class="tw-text-2xl tw-font-semibold">Aircraft Details</p>
                </div>
                <div class="tw-ml-auto">
                    <p class="tw-text-xs tw-text-gray-400 tw-hidden">updated 46 seconds ago</p>
                </div>
            </div>
            <div class="tw-border tw-w-full tw-rounded-md tw-mx-1 tw-text-lg tw-mt-2">
                <div class="tw-bg-gray-300 tw-p-3">
                    Aircraft Information
                </div>
                <div class="tw-border-b tw-py-1">
                    <div class="tw-px-4">
                        <p> Aircraft Type: {{ aircraftType }} </p>
                    </div>
                </div>
                <div class="tw-bg-gray-300 tw-p-3">
                    Airline Information
                </div>
                <div class="tw-border-b tw-py-1">
                    <div class="tw-px-4">
                        <p>Airline: {{ airlines }}</p>
                    </div>
                </div>
                <div class="tw-bg-gray-300 tw-p-3 tw-hidden">
                    Flight Data
                </div>
                <div class="tw-border-b tw-py-1 tw-hidden">
                    <div class="tw-px-4">
                        <p>Speed Filed: 560 mph graph</p>
                        <p>Altitude Filed: 40,000 ft graph Distance</p>
                        <p>Actual: 3,506 mi (Direct: 3,445 mi)</p>
                        <p>Route: 5259N/05353W TOPPS ENE PARCH3</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import flightDetailController from '../controllers/flightDetail'
export default defineComponent({
    setup() {
        return { ...flightDetailController() }
    }
})
</script>

<style scoped></style>