//multi option selection
import React from "react";
import Select from "react-select";
import { useTheme } from "styled-components";

function CustomSelect({
  style,
  label,
  options,
  onChange,
  defaultValue,
  isMulti,
}) {
  const theme = useTheme();

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px solid "+theme.fontColor,
      background: theme.card,
      color: theme.fontColor, 
      padding: 20,
    }),
    control: () => ({}),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      return { ...provided, opacity, transition };
    },
  };
  return (
    <Select
      styles={customStyles}
      isMulti={isMulti}
      options={options}
      onChange={onChange}
    />
  );
}

export default CustomSelect;
