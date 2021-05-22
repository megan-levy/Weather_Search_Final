// format weather and informaiton here
import React from "react";
import axios from "axios";
import CurrentDate from "./CurrentDate";
import CurrentTemp from "./CurrentTemp";
import WeatherIcon from "./weatherIcon";


export default function WeatherInfo(props) {
    return (
        <div className = "weatherInfo">
        <div className = "row">
            <div className = "col-5">
            <h1>
                {props.data.city}
            </h1>
            </div>
            <h2>
                <CurrentDate date = {props.data.date}/>
            </h2>
            <div>
                <div className = "col-4">
                    <ul>
                        <li>
                            <CurrentTemp temp = {Math.round(props.data.temp)} /> 
                        </li>
                        <li>
                            {props.data.description}
                        </li>
                        <li>
                            {props.data.wind} MPH
                        </li>
                        <li>
                            {props.data.humidity} %
                        </li>
                    </ul>
                </div>
                <div className= "col-3">
                <WeatherIcon code={props.data.icon} size={52} />
                </div>
            </div>
        </div>
    </div>
    );
}