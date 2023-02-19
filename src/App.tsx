import * as C from "./styles";
import { ChangeEvent, useState, useEffect } from "react";
import { optionType } from "./types";

import Search from "./components/Search";

const App = (): JSX.Element => {
  const [term, setTerm] = useState<string>("");
  const [options, setOptions] = useState<[]>([]);
  const [city, setCity] = useState<optionType | null>(null);

  const getSearchOptions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=b3660e06ac5278c2fde37c09d03b5771`
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

  const getForecast = (city: optionType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=b3660e06ac5278c2fde37c09d03b5771`
    )
      .then((res) => res.json())
      .then((data) => console.log({ data }));
  };

  const onSubmit = () => {
    if (!city) return;
  };

  const onOptionsSelect = (option: optionType) => {
    setCity(option);
  };

  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
    }
  }, [city]);

  return (
    <C.Container>
      <Search
        term={term}
        options={options}
        onInputChange={onInputChange}
        onOptionSelect={onOptionsSelect}
        onSubmit={onSubmit}
      />
    </C.Container>
  );
};

export default App;
