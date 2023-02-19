import React from "react";
import DateInDesktop from "./DateInDesktop";
import Humidity from "./Humidity";
import Time from "./Time";
import Wind from "./Wind";

export default function CityInfoDesktopshow() {
  return (
    <div className="col-sm-6 col-12 d-none d-sm-block">
      <Time currentTime="12:30" statusTime="PM" />
      <DateInDesktop day="Monday" date="9" month="January" year="2023" />
      <ul>
        <li>
          <p>
            Humidity: <Humidity humidity="89%" />
          </p>
        </li>
        <li>
          <p>
            Wind: <Wind speed="3.6km/h" />
          </p>
        </li>
      </ul>
    </div>
  );
}
