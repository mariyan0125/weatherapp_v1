import React from 'react';
import { Header } from './components/Header';
import { AddLocation } from './components/AddLocation';
import { Icon } from './components/Icon';
import { ForecastDetails } from './components/ForecastDetails';
import { WeatherContextProvider } from './contexts/WeatherContext';


function App() {
  return (
    <div className="App">
      <WeatherContextProvider>
        <Header />
        <AddLocation />
        <Icon />
        <ForecastDetails />
      </WeatherContextProvider>
    </div>
  );
}

export default App;
