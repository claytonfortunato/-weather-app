import { forecastType } from "../../types";

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
  getPop,
} from "../../helpers/index";

const Degree = ({ temp }: { temp: number }): JSX.Element => (
  <span>
    {temp}
    <sup>0</sup>
  </span>
);

const Forecast = ({ data }: Props): JSX.Element => {
  const today = data.list[0];

  return (
    <C.Container>
      <div>
        <h2>
          {data.name} <span>{data.country}</span>
        </h2>
        <h1>{Math.round(today.main.temp)}</h1>
        <p>
          {today.weather[0].main} {today.weather[0].description}
        </p>
        <p>
          H: <Degree temp={Math.ceil(today.main.temp_max)} /> L: {""}
          <Degree temp={Math.floor(today.main.temp_min)} />
        </p>
      </div>
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
      <div>
        <div>
          <Sunrise />
          {getSunTime(data.sunrise)}
        </div>
        <div>
          <Sunset />
          {getSunTime(data.sunset)}
        </div>
      </div>
    </C.Container>
  );
};

export default Forecast;
