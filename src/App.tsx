import * as C from "./styles";
import { ChangeEvent, useState, useEffect } from "react";
import { optionType } from "./types";

import Search from "./components/Search";
import useForecast from "./hooks/useForecast";

const App = (): JSX.Element => {
  const {
    term,
    options,
    forecast,
    onInputChange,
    onOptionsSelect,
    onSubmit,
  } = useForecast();

  return (
    <C.Container>
      {forecast ? (
        "we have a forecast"
      ) : (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionsSelect}
          onSubmit={onSubmit}
        />
      )}
    </C.Container>
  );
};

export default App;
