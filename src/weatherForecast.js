
import WeatherForecastDay from "./weatherForecast1Day";
import axios from"axios";
import React, {useState, useEffect} from "react";


export default function WeatherForecast (props) {
    let [Loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setLoaded = true
        setForecast (response.data.daily)
    }

    useEffect(() => {
        setLoaded(false);
      }, [props.coordinates]);

    function Load() {
        let apiKey = "4a89eb9a057b7d42b2048718c9361f4a";

        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;

        let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
        axios.get(apiURL).then(handleResponse)
    }

    if (Loaded) {
        return (
          <div className="FiveDayFOrecast">
            <div className="row">
              {forecast.map (function(dailyForecast, index) {
                if (index < 5) {
                  return (
                    <div className="col" key={index}>
                      <WeatherForecastDay data={dailyForecast} />
                    </div>
                  );
                } else {
                    return null; 
                }
              })}
            </div>
          </div>
        );

      } else {
        Load();
        return null;
      }

    }