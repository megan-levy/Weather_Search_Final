
import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./weatherBlock";
//import temp from "./CurrentTemp";


export default function Weather (props) {
    const [weather, setWeather] = useState({loaded: false});
    const [city, setCity] = useState(props.defaultCity);
 
    function handleResponse(response){
        setWeather({
          loaded: true,
          city: response.data.name,
          date: new Date (response.data.dt*1000),
          icon: response.data.weather[0].icon,
          description: response.data.weather[0].description,
          temp: response.data.main.temp,
          wind: response.data.wind.speed,
          humidity: response.data.main.humidity   
        });
          }
        
   function search() {
        const apiKey = "4a89eb9a057b7d42b2048718c9361f4a";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);
     }    

    function handleSubmit(event) {
        event.preventDefault();
       
        if (city.length > 0 ) {
        search();
        } else {
            alert ("type something");
          }
    }

    function searchCity (event) {
        setCity(event.target.value);
    }

    if (weather.loaded) {
    return (
        <div className = "weather">
        <div className = "searchbar">
        <form onSubmit= {handleSubmit}>
            <input type="search" placeholder="Enter a city..." onChange={searchCity} />
            <input type="submit" value="submit" />
        </form>
        </div>
        <WeatherInfo data = {weather}/>
        </div>
    );
    } else {
        search();
        return (
            "loading..."
        );
    }
}