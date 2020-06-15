import React, { createContext, useState } from 'react';
import axios from 'axios';


export const WeatherContext = createContext();

export const WeatherContextProvider = (props) => {
  
  const [isError, setIsError] = useState(false);
  const [isLoading , setIsLoading] =useState(false);
  const [weather, setWeather] = useState(null);

  
  const getWeather = async (city) => {
    setIsError(false);
    setIsLoading(true);
    
    try {
      const result = await axios(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_W_KEY}`);
     
      setWeather(result.data);
      setIsLoading(false);
    } catch(err) {
      setIsError(true);
      console.log(err.message);
    }
  };
  
  return (
    <WeatherContext.Provider value={{getWeather, isError, isLoading, weather}}>
      {props.children}
    </WeatherContext.Provider>
  )
}
