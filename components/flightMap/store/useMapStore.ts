import { reactive } from 'vue'

const state = reactive({
    websocketConnection: null,
})

export function useMapStore() {
    const setWebsocketConnection = (connection) => {
        state.websocketConnection = connection
    }

    const getWebsocketConnection = () => {
        return state.websocketConnection
    }

    return {
        setWebsocketConnection,
        getWebsocketConnection,
    }
}