// format weather and informaiton here
import react from "react";
import date from "./currentDate";
//import temp from "./currentTemp";

export default function weatherFormatter (props) {
    return (
        <div className = "Weather">
            <h1>
                {props.date.city}
            </h1>
        </div>
    );
}