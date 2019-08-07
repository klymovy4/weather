import React from "react";


const Weather = (props) => (
  <div className ='infoWeather'>
    {props.city &&
      <div>
        <p>Местоположение: {props.city}, {props.country}</p>
        <p>Температура: {props.temp}</p>
        <p>Воcход солнца: {props.sunrise}</p>
        <p>Заход солнца: {props.sunset}</p>
      </div>
    }
    <p className = 'error'>{props.error}</p>

  </div>
);

export default Weather;