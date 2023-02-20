import { forecastType } from "../../types";

type Props = {
  data: forecastType;
};

const Forecast = ({ data }: Props): JSX.Element => {
  const today = data.list[0];

  return (
    <div>
      <div>
        <h2>
          {data.name} <span>{data.country}</span>
        </h2>
        <h1>{Math.round(today.main.temp)}</h1>
      </div>
    </div>
  );
};

export default Forecast;
