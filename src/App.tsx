import * as C from "./styles";
import { ChangeEvent, useState } from "react";

const App = (): JSX.Element => {
  const [term, setTerm] = useState<string>("");

  const getSearchOptions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&lang=en&appid=${
        process.env.REACT_APP_API_KEY
      }
      }`
    )
      .then((res) => res.json())
      .then((data) => console.log({ data }));
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();

    if (value === "") return;

    setTerm(e.target.value);
    getSearchOptions(value);
  };

  return (
    <C.Container>
      <C.Header>Previsão do tempo</C.Header>
      <p>Digite abaixo um lugar do qual você deseja saber o tempo</p>
      <C.Search>
        <input type="text" value={term} onChange={onInputChange} />
        <button>Pesquisar</button>
      </C.Search>
    </C.Container>
  );
};

export default App;
