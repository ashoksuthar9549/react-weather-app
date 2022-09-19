import React from 'react';
import './App.css';
import TempratureAndDetails from './components/TempratureAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import axios from "axios";
import { useState } from "react";
import {UilSearch} from '@iconscout/react-unicons';

function App() {

  const [city, setCity] = useState("Sirohi");
  const [data, setData] = useState({
    description: "",
    humidity: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    country: "",
    sunrise: 0,
    sunset: 0,
    name: "",
    feels_like: 0,
    wind: 0,
    timezone: "",
    icon: "",
  });

  const handleClick = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=29932528a01409a6875770367c8e2ba8&units=metric`)
    .then((response) => {
      setData({
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      temp: response.data.main.temp,
      temp_max: response.data.main.temp_max,
      temp_min: response.data.main.temp_min,
      country: response.data.sys.country,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      name: response.data.name,
      feels_like: response.data.main.feels_like,
      wind: response.data.wind.speed,
      timezone: response.data.timezone,
      icon: response.data.weather[0].icon,
      })
    })
  }
  
  return (
   <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
    {/* <TopButtons /> */}
    <div>
    <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/4 justify-center items-center space-x-4">
          <input
            type="text"
            className="text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase"
            placeholder="search for city..."
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
        </div>
        <div className="flex flex-row w-1/4 items-center justify-center">
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          type='submit'
          onClick={handleClick}
        />
        </div>
      </div>
    </div>
    <TimeAndLocation text={data}/>
    <TempratureAndDetails text={data}/>
    {/* <Forecast title="hourly forecast"/>
    <Forecast title="daily forecast"/> */}
   </div>
  )
}

export default App;
