import { ChangeEvent } from "react";

import { optionType } from "../types";

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
      </C.Header>
      <p>Digite abaixo um lugar do qual você deseja saber o tempo</p>
      <C.Search>
        <input type="text" value={term} onChange={onInputChange} />
        <button onClick={onSubmit}>Pesquisar</button>
      </C.Search>
      <ul>
        {options.map((option: optionType, index: number) => (
          <li key={option.name + "-" + index}>
            <button className="btn" onClick={() => onOptionSelect(option)}>
              <p>{option.name}</p>
            </button>
          </li>
        ))}
      </ul>
    </C.Container>
  );
};

export default Search;
