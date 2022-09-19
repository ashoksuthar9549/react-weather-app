import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
} from "@iconscout/react-unicons";

function TempratureAndDetails({text}) {
  return (
    <div>
    <div className="flex justify-center items-center py-6 text-xl text-cyan-300">
      <p className="capitalize">{text.description}</p>
    </div>

    <div className="flex flex-row items-center justify-between py-3 text-white">
      <img
        src={`http://openweathermap.org/img/wn/${text.icon}@2x.png`}
        alt=""
        className="w-20"
      />
      <p className="text-5xl">{`${text.temp} °C`}</p>

      <div className="flex flex-col space-y-2">
        <div className="flex text-sm float-light justify-center items-center">
          <UilTemperature size={18} className="mr-1" />
          Real Feel:
          <span className="font-medium ml-1">{`${text.feels_like} °C`}</span>
        </div>

        <div className="flex text-sm float-light justify-center items-center">
          <UilTear size={18} className="mr-1" />
          Humadity:
          <span className="font-medium ml-1">{`${text.humidity} %`}</span>
        </div>

        <div className="flex text-sm float-light justify-center items-center">
          <UilWind size={18} className="mr-1" />
          Wind:
          <span className="font-medium ml-1">{`${text.wind} Km/h`}</span>
        </div>
      </div>
    </div>

    <div className="flex flex-row items-center justify-center text-white space-x-2 text-sm py-3">
      {/* <UilSun />
      <p className="font-light ">
        Rise: <span className="font-medium ml-1">{text.sunrise}</span>
      </p>
      <p className="font-light">|</p>

      <UilSunset />
      <p className="font-light ">
        Set: <span className="font-medium ml-1">{text.sunset}</span>
      </p>
      <p className="font-light">|</p> */}

      <UilSun />
      <p className="font-light ">
        High: <span className="font-medium ml-1">{`${text.temp_max} °C`}</span>
      </p>
      <p className="font-light">|</p>

      <UilSun />
      <p className="font-light ">
        Low: <span className="font-medium ml-1">{`${text.temp_min} °C`}</span>
      </p>
    </div>
    </div>
  );
}

export default TempratureAndDetails;
