import React from "react";

/**
 * CustomInput component
 *
 * @param {Object} props - The component props.
 * @param {function} props.handleChange - The function to handle input change events.
 * @returns {React.Element} JSX - The rendered input element.
 */
function CustomInput({ handleChange }) {
  const [value, setValue] = React.useState("");

  const onChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    handleChange(newValue);
  };

  return <input name="custom-choice-input" value={value} onChange={onChange} />;
}

export default CustomInput;
