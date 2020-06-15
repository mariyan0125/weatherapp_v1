import React, { useContext } from 'react';
import { WeatherContext } from '../contexts/WeatherContext';

export const Icon = () => {
  const { weather } = useContext(WeatherContext);
  
  const getIcon = () => {
    let icon;
    const iconId = weather.weather[0].id;
    if(iconId >= 200 && iconId <= 232) { icon = 'thunder.svg'; }
    if(iconId >= 300 && iconId <= 321) { icon = 'rainy-1.svg'; }
    if(iconId >= 500 && iconId <= 532) { icon = 'rainy-5.svg'; }
    if(iconId >= 600 && iconId <= 622) { icon = 'snowy-1.svg'; }
    if(iconId >= 701 && iconId <= 781) { icon = 'cloudy.svg'; }
    if(iconId === 800) { icon = 'day.svg'; }
    if(iconId >= 801 && iconId <= 804) { icon = 'cloudy.svg'; }
    return icon;
  }
  
   return !weather ? null  :  (
    <div className="icon">
      <img src={`./img/icons/${getIcon()}`} alt="Weather icon" className="icon__img"/>
    </div>
  )
}
