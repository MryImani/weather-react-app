import React from "react";
export default function NextDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);

    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);

    return `${temperature}`;
  }
  return (
    <div className="col-sm-1 col-2 nextDay pt-3 ">
      <span className="dayName">{day()}</span>
      <img src={props.data.condition.icon_url} alt="weather status logo" />
      <div>
        <span className="temperature max">{maxTemperature()}</span>
        <span>°</span>
        <span className="temperature min">{minTemperature()}</span>
        <span>°</span>
      </div>
    </div>
  );
}
