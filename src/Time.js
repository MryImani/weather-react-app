import React from "react";
export default function Time(props) {
  return (
    <h1 className="time">
      <span id="currentTime">{props.currentTime}</span>
      <span id="statusTime">{props.statusTime}</span>
    </h1>
  );
}
