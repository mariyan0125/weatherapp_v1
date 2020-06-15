import React, { useContext, useState } from 'react';
import { WeatherContext } from '../contexts/WeatherContext';

export const AddLocation = () => {
  const { getWeather } = useContext(WeatherContext);
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(city);
    setCity('');
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="city" className="form__label">enter the location for weather</label>
      <input type="text" className="form__input" name="city" value={city} onChange={(e) => setCity(e.target.value)} />
      <button className="form__button">add</button>
    </form>
  )
}
