import React, { useState } from "react";
import NextDay from "./NextDay";
import axios from "axios";
export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  if (loaded) {
    return (
      <div className="weatherForcast">
        {forecast.map(function (day, index) {
          if (index < 6) {
            return <NextDay key={index} data={day} />;
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let apiKey = "5fd3056eb5affa9b30928e4047a72otd";
    axios
      .get(
        `https://api.shecodes.io/weather/v1/forecast?lat=${props.coordinates.latitude}&lon=${props.coordinates.longitude}&key=${apiKey}&units=metric`
      )
      .then((response) => {
        setLoaded(true);
        let dailyForcast = response.data.daily;
        dailyForcast.shift();
        setForecast(dailyForcast);
      });
  }
}
