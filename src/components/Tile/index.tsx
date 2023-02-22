import Feels from "../icons/Feels";
import Humidity from "../icons/Humidity";
import Visibility from "../icons/Visibility";
import Wind from "../icons/Wind";

import * as C from "./styles";

type Props = {
  icon: "wind" | "feels" | "humidity" | "visibility";
  title: string;
  info: string | JSX.Element;
  description?: string | JSX.Element;
};

const icons = {
  wind: Wind,
  feels: Feels,
  humidity: Humidity,
  visibility: Visibility,
};

const Tile = ({ icon, title, info, description }: Props): JSX.Element => {
  const Icon = icons[icon];

  return (
    <C.Container>
      <div>
        <Icon /> <h4>{title}</h4>
      </div>
      <h3>{info}</h3>

      <div>{description}</div>
    </C.Container>
  );
};
export default Tile;
