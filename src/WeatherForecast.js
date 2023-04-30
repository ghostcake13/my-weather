import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col-3">
            <div className="ForecastDay">{forecast[0].dt}y</div>{" "}
            <WeatherIcon code={forecast[0].weather[0].icon} size={32} />{" "}
            <div className="ForecastTemperatures">
              <span className="ForecastMax">{forecast[0].temp.max}</span>{" "}
              <span className="ForecastMin">{forecast[0].temp.min}</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "0efb4fc16a9ed98dc0b3aafd8491d6ad";
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
