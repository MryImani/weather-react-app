import React from "react";
export default function CityName(props) {
  return (
    <div>
      <h2>{props.CityName}</h2>
      <h5>{props.country}</h5>
    </div>
  );
}
