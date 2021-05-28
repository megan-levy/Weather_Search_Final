import React from "react";
import Icon from "./weatherIcon";

export default function WeatherForecastDay(props) {
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
    
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
        return days[day];
      }
    function tempHigh () {
        let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
    }
    function tempLow () {
        let temperature = Math.round(props.data.temp.low);
    return `${temperature}°`;
    }

    return (
        <div>
            <div className = "WeatherForecastDay">
                {day()}
            </div>
            <Icon code={props.data.weather[0].icon} size={30} />
            <div className = "ForecastHighLow">
                <span className ="high">HIGH: {tempHigh()}</span>
                <span className = "low">LOW: {tempLow()}</span>
            </div>
        </div>
    );
}