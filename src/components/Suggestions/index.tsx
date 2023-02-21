import { optionType } from "../../types/index";

type componentsProps = {
  options: [];
  onSelect: (option: optionType) => void;
};

export const Suggestions = ({
  options,
  onSelect,
}: componentsProps): JSX.Element => (
  <ul>
    {options.map((option: optionType, index: number) => (
      <li key={option.name + "-" + index}>
        <button className="btn" onClick={() => onSelect(option)}>
          <p>{option.name}</p>
        </button>
      </li>
    ))}
  </ul>
);
