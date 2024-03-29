import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./App.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix d-flex">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
            <div className="float-left">
              <h1> {Math.round(props.data.temperature)}° F</h1>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: {props.data.precipitation}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
