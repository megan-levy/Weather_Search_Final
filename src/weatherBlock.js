// format weather and informaiton here
import React from "react";
import axios from "axios";
import date from "./CurrentDate";
import temp from "./CurrentTemp";

export default function WeatherInfo(props) {
    return (
        <div className = "weatherInfo">
            <div className = "col-5">
            <h1>
                {props.data.city}
            </h1>
            </div>
            <h2>
                <date date = {props.data.date}/>
            </h2>
            <div className = "row">
                <div className = "col-6">
                    <ul>
                        <li>
                            <temp temp = {props.data.temp} />
                        </li>
                        <li>
                            {props.data.description}
                        </li>
                    </ul>
                </div>
                <div className= "col-6">
                    <ul>
                        <li>
                            {props.data.humidity}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}