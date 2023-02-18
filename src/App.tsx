import * as C from "./styles";
import React from "react";

const App = () => {
  return (
    <C.Container>
      <C.Header>Previsão do tempo</C.Header>
      <p>Digite abaixo um lugar do qual você deseja saber o tempo</p>
      <C.Search>
        <input type="text" value={""} />
        <button>Pesquisar</button>
      </C.Search>
    </C.Container>
  );
};

export default App;
