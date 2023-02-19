import React, { useState } from "react";
import CurrentStatusLogo from "./CurrentStatusLogo";
import CurrentStatusTemperature from "./CurrentStatusTemperature";
import NextDay from "./NextDay";
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
      <NextDay
        dayName="TUE"
        maxTemp="6"
        minTemp="-1"
        src="/images/sunny.png"
        className="nextDay1"
      />
      <NextDay
        dayName="WED"
        maxTemp="4"
        minTemp="-1"
        src="/images/partly-cloudy.png"
        className="nextDay2"
      />
      <NextDay
        dayName="THU"
        maxTemp="3"
        minTemp="-1"
        src="/images/cloudy.png"
        className="nextDay3"
      />
      <NextDay
        dayName="FRI"
        maxTemp="2"
        minTemp="-2"
        src="/images/cloudy.png"
        className="nextDay4"
      />
      <NextDay
        dayName="SAT"
        maxTemp="1"
        minTemp="-3"
        src="/images/rainy.png"
        className="nextDay5"
      />
      <NextDay
        dayName="SUN"
        maxTemp="2"
        minTemp="-3"
        src="/images/snowy.png"
        className="nextDay6"
      />
      <Credits />
    </div>
  );
}
