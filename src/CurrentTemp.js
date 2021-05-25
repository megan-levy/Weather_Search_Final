import {useState} from "react";

export default function GetTemp (props) {
    const [unit,setUnit] = useState("metrics")

    function unitConversionCelsius (event) {
        event.preventDefault();
        setUnit("Celsius")
    }

    function unitConversionFahrenheit (event) {
        event.preventDefault ();
        setUnit ("Fahrenheit");
    }

   if (unit === "Fahrenheit") {
    return (
    <div className = "Weathertemperature">
        <span className= "temperature">
            {Math.round(props.temp)}
        </span>
        <span className="unit">°F | <span onClick = {unitConversionCelsius}>°C</span></span> 
    </div>
    );
   } else {
       let celsius = ((props.temp) - 32)* 5/9;
       return (
        <div className = "Weathertemperature">
        <span className= "temperature">
            {Math.round(celsius)}
        </span>
        <span className="unit">°C | <span onClick = {unitConversionFahrenheit}>°F</span></span> 
    </div>
       );
   }
}