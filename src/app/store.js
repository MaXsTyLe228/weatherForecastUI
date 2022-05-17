import {createStore, applyMiddleware, combineReducers} from "redux";
import {weatherReducer} from "./weatherReduser";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    weather: weatherReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))