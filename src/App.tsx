import * as C from "./styles";

import Search from "./components/Search";
import Forecast from "./components/Forecast";
import useForecast from "./hooks/useForecast";

const App = (): JSX.Element => {
  const {
    term,
    options,
    forecast,
    onInputChange,
    onOptionSelect,
    onSubmit,
  } = useForecast();

  return (
    <>
      <C.Container>
        {forecast ? (
          <Forecast data={forecast} />
        ) : (
          <Search
            term={term}
            options={options}
            onInputChange={onInputChange}
            onOptionSelect={onOptionSelect}
            onSubmit={onSubmit}
          />
        )}
      </C.Container>
    </>
  );
};

export default App;
