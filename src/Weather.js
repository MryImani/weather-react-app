import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherStatus from "./WeatherStatus";
import PreLoader from "./PreLoader";
import getTheme from "./getTheme";
import getDateAndTime from "./getDateAndTime";
import axios from "axios";
export default function Weather() {
  let currentLocation = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [value, setValue] = useState(currentLocation.split("/")[1]);
  function updateCity(event) {
    event.preventDefault();
    setValue(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setLoaded(false);
    SearchCity(value);
  }
  function SearchCity(city) {
    let apiKey = "5fd3056eb5affa9b30928e4047a72otd";
    let apiUrl = "https://api.shecodes.io/weather/v1/current";
    if (city) {
      axios
        .get(`${apiUrl}?query=${city}&key=${apiKey}&units=metric`)
        .then((response) => {
          setWeather({
            description: response.data.condition.description,
            country: response.data.country,
            city: response.data.city,
            temperature: Math.floor(response.data.temperature.current),
            speed: `${response.data.wind.speed}km/h`,
            humidity: `${response.data.temperature.humidity}%`,
            time: response.data.time,
            coordinates: response.data.coordinates,
            condition: response.data.condition,
            currentStatusIcon: getTheme(
              response.data.condition.description.toLowerCase()
            ).iconSrc,
            dateAndTimeInfo: getDateAndTime(
              new Date(response.data.time * 1000)
            ),
          });
          document.querySelector(
            ".theme"
          ).style.backgroundImage = `linear-gradient(black, black),${
            getTheme(response.data.condition.description.toLowerCase())
              .backgroundUrl
          }`;
          document.querySelector(".container").style.backgroundImage = getTheme(
            response.data.condition.description.toLowerCase()
          ).backgroundUrl;
          setLoaded(true);
        });
    } else {
      alert("City not found,Please try again!");
    }
  }

  if (loaded) {
    return (
      <div className="weather">
        <WeatherInfo data={weather} />
        <div className="row searchCity mx-3">
          <div className="col-md-6 col-12">
            <form id="searchCityForm" onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your city"
                  id="searchCityInp"
                  onChange={updateCity}
                />
                <button
                  className="btn btn-primary search"
                  type="submit"
                  id="searchCityBtn"
                >
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

        <WeatherStatus data={weather} />
      </div>
    );
  } else {
    SearchCity(value);
    return <PreLoader />;
  }
}
