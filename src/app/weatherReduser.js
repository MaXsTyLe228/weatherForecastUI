const defaultState = {
    weather: []
}

const SEARCH = "SEARCH"

export const weatherReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SEARCH:
            return {...state, weather: [...action.payload]}
        default:
            return state
    }
}

export const getWeatherAction = (payload) => ({type: SEARCH, payload})