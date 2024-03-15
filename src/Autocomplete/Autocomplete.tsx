/**
 * Autocomplete component for displaying a list of options based on user input.
 *
 * @component
 * @example
 * ```tsx
 * import Autocomplete from './Autocomplete';
 *
 * const options = ['apple', 'banana', 'cherry'];
 *
 * function App() {
 *   return (
 *     <Autocomplete options={options} />
 *   );
 * }
 * ```
 *
 * @param options - An array of strings representing the available options for autocomplete.
 * @param inputValue - The current input value for the autocomplete.
 * @param loading - A boolean indicating whether the autocomplete is in a loading state.
 * @param onInputChange - A callback function triggered when the input value changes.
 * @returns The Autocomplete component.
 */
import { useEffect, useRef } from "react";
import "./Autocomplete.css";
import { useAutocomplete } from "./useAutocomplete";

interface AutoCompleteProps {
  options: string[];
  inputValue?: string;
  loading?: boolean;
  onInputChange?: (value: string) => void;
}

function Autocomplete({
  options,
  inputValue: inputValueProp = "",
  loading = false,
  onInputChange,
}: AutoCompleteProps) {
  const myRef = useRef<HTMLDivElement>(null);
  const {
    filteredOptions,
    inputValue,
    handleInputChange,
    handleSelectOption,
    open,
    setOpen,
  } = useAutocomplete(options, inputValueProp, onInputChange);

  const Option = ({
    option,
    inputValue,
    onClick,
  }: {
    option: string;
    inputValue: string;
    onClick?: () => void;
  }) => {
    const parts = option.split(new RegExp(`(${inputValue})`, "gi"));

    return (
      <li onClick={onClick}>
        {parts.map((part, index) =>
          part.toLowerCase() === inputValue.toLowerCase() ? (
            <span key={index}>{part}</span>
          ) : (
            part
          )
        )}
      </li>
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (myRef.current && !myRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpen]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="autocomplete" ref={myRef}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        onFocus={() => setOpen(true)}
      />
      {open && (
        <ul>
          {filteredOptions.map((option, _) => (
            <Option
              key={option}
              inputValue={inputValue}
              option={option}
              onClick={() => {
                handleSelectOption(option);
              }}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Autocomplete;
