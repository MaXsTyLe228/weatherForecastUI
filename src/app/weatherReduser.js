const defaultState = {
    weather: []
}

const SEARCH = "SEARCH"

export const weatherReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SEARCH:
            try {
                return {weather: [...action.payload]}
            } catch (e) {
                return {error: [action.payload]}
            }
        default:
            return state
    }
}

export const getWeatherAction = (payload) => ({type: SEARCH, payload})