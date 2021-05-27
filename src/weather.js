
import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./weatherBlock";
//import temp from "./CurrentTemp";
import Load from "./weatherForecast";


export default function Weather (props) {
    const [weather, setWeather] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
 
    function handleResponse(response){
        setWeather({
          ready: true,
          city: response.data.name,
          date: new Date (response.data.dt*1000),
          icon: response.data.weather[0].icon,
          description: response.data.weather[0].description,
          temp: response.data.main.temp,
          wind: response.data.wind.speed,
          humidity: response.data.main.humidity,
          coordinates: response.data.coord,
        });
          }
        
   function search() {
        const apiKey = "4a89eb9a057b7d42b2048718c9361f4a";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);
     }    

    function handleSubmit(event) {
        event.preventDefault();
       search();
    }

    function searchCity (event) {
        setCity(event.target.value);
    }

    if (weather.ready) {
    return (
        <div className = "weather">
        <div className = "searchbar">
        <form onSubmit= {handleSubmit}>
            <input type="search" placeholder="Enter a city..." onChange={searchCity} />
            <input type="submit" value="submit" className= "submit"/>
        </form>
        </div>
        <WeatherInfo data = {weather}/>
        <Load data = {weather.coordinates}/>
        </div>
    );
    } else {
        search();
        return (
            "loading..."
        );
    }
}