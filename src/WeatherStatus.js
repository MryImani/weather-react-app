import React, { useState } from "react";
import CurrentStatusLogo from "./CurrentStatusLogo";
import CurrentStatusTemperature from "./CurrentStatusTemperature";
import WeatherForecast from "./WeatherForecast";
import Credits from "./Credits";

export default function WeatherStatus(props) {
  let [temperature, setTemperature] = useState(props.data.temperature);
  let [temperatureUnit, setTemperatureUnit] = useState("°C");

  return (
    <div className="row weatherStatus">
      <div className="col-12 border-bottom border-dark-subtle pb-2 cityStatusTitle">
        <div>
          <p>Daily Forecast</p>
        </div>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
            onClick={() => {
              setTemperature(props.data.temperature);
              setTemperatureUnit("°C");
            }}
            defaultChecked
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio1">
            °C
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            onClick={() => {
              setTemperature(Math.floor((temperature * 9) / 5 + 32));
              setTemperatureUnit("°F");
            }}
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio2">
            °F
          </label>
        </div>
      </div>
      <CurrentStatusLogo src={props.data.currentStatusIcon} />
      <CurrentStatusTemperature
        temperature={temperature}
        temperatureUnit={temperatureUnit}
        weatherDescription={props.data.description}
      />
      <WeatherForecast coordinates={props.data.coordinates} />
      <Credits />
    </div>
  );
}
