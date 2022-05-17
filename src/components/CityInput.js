import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchWeather} from "../app/getWeather";

const CityInput = () => {
    const dispatch = useDispatch()
    let textInput = React.createRef();  // React use ref to get input value

    let onOnclickHandler = (e) => {
        dispatch(fetchWeather(textInput.current.value))
    };
    return (
        <div>
            <input ref={textInput}/>
            <button onClick={onOnclickHandler}>Search</button>
        </div>
    );
};

export default CityInput;