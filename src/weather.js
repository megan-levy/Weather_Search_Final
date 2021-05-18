
import react, {useState} from "react";
import axios from "axios";


export default function Weather (props) {
    const [weather, obtainWeather] = useState(null);

    function handleResponse (response) {
        obtainWeather ({
         city: response.data.name,
         temperature: response.data.main.temp,
         description: response.data.weather[0].description,
         humidity: response.data.main.humidity,
         windspeed: response.data.wind.speed,
        });
    }

    function searchCity (event){
        getCity(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        apiImplementation();
    }
    function apiImplementation() {
        let apiKey = "4a89eb9a057b7d42b2048718c9361f4a";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
        get(apiUrl).then (handleResponse);
    }

    return (
        <div className = "weather">
        <form onSubmit= {handleSubmit}>
            <input type="search" placeholder="Enter a city..." onChange={searchCity} />
            <input type="submit" value="submit" />
        </form>

        </div>
    );
}