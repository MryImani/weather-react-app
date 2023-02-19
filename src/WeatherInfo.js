import React from "react";
import DateInDesktop from "./DateInDesktop";
import DateInMobile from "./DateInMobile";
import Humidity from "./Humidity";
import Time from "./Time";
import Wind from "./Wind";
import CityName from "./CityName";

export default function WeatherInfo(props) {
  return (
    <div className="row weatherInfo">
      <div className="col-sm-6 col-12 d-none d-sm-block">
        <Time
          currentTime={props.data.dateAndTimeInfo.strTime}
          statusTime={props.data.dateAndTimeInfo.ampm}
        />
        <DateInDesktop
          day={props.data.dateAndTimeInfo.dayName}
          date={props.data.dateAndTimeInfo.day}
          month={props.data.dateAndTimeInfo.month}
          year={props.data.dateAndTimeInfo.year}
        />
        <ul>
          <li>
            <p>
              Humidity: <Humidity humidity={props.data.humidity} />
            </p>
          </li>
          <li>
            <p>
              Wind: <Wind speed={props.data.speed} />
            </p>
          </li>
        </ul>
      </div>
      <div className="col-sm-6 col-12 cityName">
        <div>
          <CityName CityName={props.data.city} country={props.data.country} />
          <p className="dateMobileShow d-block d-sm-none">
            <DateInMobile
              day={props.data.dateAndTimeInfo.dayName}
              date={props.data.dateAndTimeInfo.day}
              month={props.data.dateAndTimeInfo.month}
              year={props.data.dateAndTimeInfo.year}
              time={props.data.dateAndTimeInfo.strTime}
            />
            <br />
            Humidity: <Humidity humidity={props.data.humidity} /> ,Wind:
            <Wind speed={props.data.speed} />
          </p>
        </div>
        <span>
          <i className="fa-solid fa-location-dot"></i>
        </span>
      </div>
    </div>
  );
}
