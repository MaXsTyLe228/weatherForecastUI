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


const WeatherChart = () => {
    const data = useSelector(state => state.weather.weather)

    return (
        <div>
            <LineChart
                width={500}
                height={300}
                data={data}
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
        </div>
    );
};

export default WeatherChart;