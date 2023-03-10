import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
