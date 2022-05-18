import React from 'react';
import {useDispatch} from "react-redux";
import {fetchWeather} from "../app/getWeather";
import styles from '../styles/styles.module.css'

const CityInput = () => {
    const dispatch = useDispatch()
    let textInput = React.createRef();  // React use ref to get input value

    const onOnclickHandler = (e) => {
        dispatch(fetchWeather(textInput.current.value))
    };

    const onKeyUp = (event) => {
        if (event.charCode === 13) {
            onOnclickHandler();
        }
    }
    return (
        <div>
            <input ref={textInput} className={styles.input_city} onKeyPress={onKeyUp}/>
            <button className={styles.search_button} onClick={onOnclickHandler}>Search</button>
        </div>
    );
};

export default CityInput;