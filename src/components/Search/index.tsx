import { ChangeEvent } from "react";

import { optionType } from "../../types";

import { Suggestions } from "../Suggestions";

import * as C from "./styles";

type Props = {
  term: string;
  options: [];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (option: optionType) => void;
  onSubmit: () => void;
};

const Search = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props) => {
  return (
    <C.Container>
      <C.Header>
        <span>Previsão</span> do tempo
        <p>Digite abaixo um lugar do qual você deseja saber o tempo</p>
      </C.Header>
      <C.Search>
        <input type="text" value={term} onChange={onInputChange} />
        <button onClick={onSubmit}>Pesquisar</button>
      </C.Search>
      <Suggestions options={options} onSelect={onOptionSelect} />
    </C.Container>
  );
};

export default Search;
