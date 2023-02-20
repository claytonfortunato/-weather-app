import React from "react";
import { forecastType } from "../../types";

type Props = {
  data: forecastType;
};

const Forecast = ({ data }: Props): JSX.Element => {
  const today = data.list[0];

  return (
    <div>
      <div>
        <h2>{data.name}</h2>
        <span>{data.country}</span>
      </div>
    </div>
  );
};

export default Forecast;
