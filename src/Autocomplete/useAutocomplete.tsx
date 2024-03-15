import { useState } from "react";

export function useAutocomplete(
  optionsProp: string[],
  inputValueProp: string,
  onInputChange?: (value: string) => void
) {
  const [inputValue, setInputValue] = useState(inputValueProp || "");
  const [open, setOpen] = useState(false);
  const [filteredOptions, setOptions] = useState<string[]>(optionsProp);

  const getFilteredOptions = (inputValue: string) => {
    return optionsProp.filter((option) =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
    setOptions(getFilteredOptions(value));
    setOpen(true);
    onInputChange && onInputChange(value);
  };

  const handleSelectOption = (value: string) => {
    setInputValue(value);
    setOptions(getFilteredOptions(value));
    setOpen(false);
  };

  return {
    inputValue,
    open,
    filteredOptions,
    setInputValue,
    setOpen,
    handleInputChange,
    handleSelectOption,
  };
}
