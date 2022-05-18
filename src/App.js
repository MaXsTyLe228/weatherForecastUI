import React from 'react';
import CityInput from "./components/CityInput";
import WeatherChart from "./components/WeatherChart";
import styles from "./styles/styles.module.css"

function App() {
    return (
        <div className={styles.App}>
            <CityInput/>
            <WeatherChart/>
        </div>
    );
}

export default App;
