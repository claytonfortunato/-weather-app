import { forecastType } from "../../types";
import Tile from "../Tile";

import * as C from "./styles";

import Sunrise from "../icons/Sunrise";
import Sunset from "../icons/Sunset";

type Props = {
  data: forecastType;
};

import {
  getHumidityValue,
  getWindDirection,
  getVisibilityValue,
  getSunTime,
} from "../../helpers/index";

const Degree = ({ temp }: { temp: number }): JSX.Element => (
  <span>
    {temp}
    <sup>0</sup>
  </span>
);

const Forecast = ({ data }: Props) => {
  const today = data.list[0];

  return (
    <>
      <C.Option>
        <C.City>
          <h2>
            {data.name} <span>{data.country}</span>
          </h2>
          <h1>{Math.round(today.main.temp)} °F</h1>
        </C.City>
        <div className="temp">
          {data.list.map((item, i) => (
            <div key={i}>
              <p>{i === 0 ? "Now" : new Date(item.dt * 1000).getHours()}</p>
              <img
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={`weather-icon-${item.weather[0].description}`}
              />
              <p>
                <Degree temp={Math.round(item.main.temp)} />
              </p>
            </div>
          ))}
        </div>
      </C.Option>
      <C.Description>{today.weather[0].main}</C.Description>
      <C.Container>
        <C.Sun>
          <Sunrise />
          {getSunTime(data.sunrise)}
          <Sunset />
          {getSunTime(data.sunset)}
        </C.Sun>

        <Tile
          icon="feels"
          title="Feels like"
          info={<Degree temp={Math.round(today.main.feels_like)} />}
          description={`Feels ${
            Math.round(today.main.feels_like) < Math.round(today.main.temp)
              ? "colder"
              : "warmer"
          }`}
        />

        <Tile
          icon="visibility"
          title="Visibility"
          info={`${(today.visibility / 1000).toFixed()} km`}
          description={getVisibilityValue(today.visibility)}
        />
        <Tile
          icon="humidity"
          title="Humidity"
          info={`${today.main.humidity} %`}
          description={getHumidityValue(today.main.humidity)}
        />

        <Tile
          icon="wind"
          title="Wind"
          info={`${Math.round(today.wind.speed)} km/h`}
          description={`${getWindDirection(Math.round(today.wind.deg))}, gusts 
            ${today.wind.gust.toFixed(1)} km/h`}
        />
      </C.Container>
    </>
  );
};

export default Forecast;
