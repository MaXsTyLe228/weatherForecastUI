import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import {useSelector} from "react-redux";
import styles from '../styles/styles.module.css'


const WeatherChart = () => {
    const data = useSelector(state => state.weather)
    const weatherData = data.weather

    return (
        <div className={styles.chart}>
            {
                weatherData!=undefined ?
                <LineChart
                    width={500}
                    height={300}
                    data={weatherData}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="date_txt" visibility={"hidden"}/>
                    <YAxis/>
                    <Tooltip/>
                    <Line
                        type="monotone"
                        dataKey="temp"
                        stroke="#8884d8"
                        activeDot={{r: 8}}
                    />
                </LineChart>
                    :
                    <div className={styles.error_name}>Incorrect city name</div>
            }
        </div>
    );
};

export default WeatherChart;