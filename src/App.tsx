import * as C from "./styles";

import Search from "./components/Search";
import useForecast from "./hooks/useForecast";
import Forecast from "./components/Forecast";

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
        <Forecast data={forecast} />
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
