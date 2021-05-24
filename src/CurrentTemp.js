import react, {useState} from "react";

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
        <span className="unit">°F | <a href ="/" onClick = {unitConversionCelsius}>°C</a></span> 
    </div>
    );
   } else {
       let celsius = ((props.temp) * 5/9)- 32;
       return (
        <div className = "Weathertemperature">
        <span className= "temperature">
            {Math.round(celsius)}
        </span>
        <span className="unit">°C | <a href ="/" onClick = {unitConversionFahrenheit}>°F</a></span> 
    </div>
       );
   }
}