// format weather and informaiton here
import React from "react";
//import axios from "axios";
import CurrentDate from "./currentDate";
import CurrentTemp from "./CurrentTemp";
import WeatherIcon from "./weatherIcon";
import './App.css';

export default function WeatherInfo(props) {
    return (
        <div className = "weatherInfo" >
        <div className="container">
            <h1>
                {props.data.city}
            </h1>
            </div>
            <h2>
                <CurrentDate date = {props.data.date}/>
            </h2>
            <div className="row">
                <div className = "col-10">
                    <ul>
                        <li><WeatherIcon code={props.data.icon} size={52} /></li>
                        
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
                <div className= "col-2">
                <CurrentTemp temp = {Math.round(props.data.temp)} /> 
                </div>
            </div>
        </div>
 
    );
}