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
        <Icon /> <h4 className="ml-1">{title}</h4>
      </div>
      <h3 className="mt-2 text-lg">{info}</h3>

      <div className="text-xs font-bold">{description}</div>
    </C.Container>
  );
};
export default Tile;
