import React from 'react';
import './App.css';
import CityInput from "./components/CityInput";
import WeatherChart from "./components/WeatherChart";

function App() {
    return (
        <div className="App">
            <CityInput/>
            <WeatherChart/>
        </div>
    );
}

export default App;
