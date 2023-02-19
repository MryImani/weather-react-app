import React from "react";
export default function CurrentStatusTemperature(props) {
  return (
    <div className="col-sm-1 col-6 currentStatusTemperature pt-3">
      <p>TODAY</p>
      <h2>
        <span className="temperature">{props.temperature}</span>
        <span>
          <sup className="temperatureUnit">{props.temperatureUnit}</sup>
        </span>
      </h2>
      <h6 className="weatherDescription">{props.weatherDescription}</h6>
    </div>
  );
}
