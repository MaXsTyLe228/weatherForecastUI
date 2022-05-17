import axios from "axios";
import {getWeatherAction} from "./weatherReduser";

export function fetchWeather(city) {
    return async function (dispatch) {
        await axios.get("http://127.0.0.1:7000/get_weather?city=" + city)
            .then((data) => {
                //console.log(data.data)
                dispatch(getWeatherAction(data.data))
            });
    };
}