import React from "react";
export default function NextDay(props) {
  return (
    <div className="col-sm-1 col-2 nextDay pt-3 nextDay1">
      <span className="dayName">{props.dayName}</span>
      <img src={props.src} alt="weather status logo" />
      <div>
        <span className="temperature max">{props.maxTemp}</span>
        <span>°</span>
        <span className="temperature min">{props.minTemp}</span>
        <span>°</span>
      </div>
    </div>
  );
}
