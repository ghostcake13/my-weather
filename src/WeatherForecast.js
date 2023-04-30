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
    console.log(forecast);
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-3">
          <div className="ForecastDay"> day</div>{" "}
          <WeatherIcon code="01d" size={32} />{" "}
          <div className="ForecastTemperatures">
            <span className="ForecastMax">{forecast[0].temp.max}</span>{" "}
            <span className="ForecastMin">{forecast[0].temp.min}</span>
          </div>
        </div>
      </div>
    </div>;
  } else {
    let apiKey = "b4b83d40bb996cdee061104aca316784;";
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
