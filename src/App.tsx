import * as C from "./styles";
import { ChangeEvent, useState } from "react";
import { optionType } from "./types";

const App = (): JSX.Element => {
  const [term, setTerm] = useState<string>("");
  const [options, setOptions] = useState<[]>([]);

  const getSearchOptions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
        process.env.REACT_APP_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setOptions(data));
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setTerm(value);

    if (value === "") return;

    getSearchOptions(value);
  };

  const onOptionsSelect = (option: optionType) => {
    console.log(option.name);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${option.lat}&lon=${option.lon}&appid=${process.env.REACT_APP_API_KEY}`
    );
  };

  return (
    <C.Container>
      <C.Header>Previsão do tempo</C.Header>
      <p>Digite abaixo um lugar do qual você deseja saber o tempo</p>
      <C.Search>
        <input type="text" value={term} onChange={onInputChange} />
        <button>Pesquisar</button>
      </C.Search>
      <ul>
        {options.map((option: optionType, index: number) => (
          <li key={option.name + "-" + index}>
            <button className="btn" onClick={() => onOptionsSelect(option)}>
              <p>{option.name}</p>
            </button>
          </li>
        ))}
      </ul>
    </C.Container>
  );
};

export default App;
