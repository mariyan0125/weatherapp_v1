import React, { useContext } from 'react';
import { WeatherContext } from '../contexts/WeatherContext';

export const ForecastDetails = () => {

  const { weather, isLoading, isError } = useContext(WeatherContext);
   
   return !weather ? null  :  (
    isLoading ? (<div>... loading</div>) :
    (<div className="forecast-details">
      <div>{isError ? '...something went wrong' : ''}</div>
      <h5 className="forecast-details__city">{weather.name}</h5>
      <div className="forecast-details__condition">Weather condition: {weather.weather[0].description}</div>
      <div className="forecast-details__temperature">{Math.floor(weather.main.temp - 273.15)}<span>&deg;C</span></div>
      <div className="forecast-details__min-max"><span className="min">Min {Math.floor(weather.main.temp_min - 273.15)} &deg;C</span><span className="max">Max {Math.floor(weather.main.temp_max - 273.15)} &deg;C</span></div>
    </div>)
  )
}
