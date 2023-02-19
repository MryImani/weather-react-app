import React from "react";
import Humidity from "./Humidity";
import Wind from "./Wind";
import DateInMobile from "./DateInMobile";
export default function DateMobileShow() {
  return (
    <p className="dateMobileShow d-block d-sm-none">
      <DateInMobile
        day="Monday"
        time="12:30"
        date="9"
        month="January"
        year="2023"
      />
      <br />
      Humidity: <Humidity humidity="89%" /> ,Wind:
      <Wind speed="3.6km/h" />
    </p>
  );
}
