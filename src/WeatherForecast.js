import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "b4b83d40bb996cdee061104aca316784;";
  let lat = props.coord.lat;
  let lon = props.coord.lon;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-3">
          <div className="ForecastDay"> day</div>{" "}
          <WeatherIcon code="01d" size={32} />{" "}
          <div className="ForecastTemperatures">
            <span className="ForecastMax">00</span>{" "}
            <span className="ForecastMin">00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
