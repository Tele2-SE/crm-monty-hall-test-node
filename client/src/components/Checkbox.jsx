import React from 'react';
import Text from './Text';

const Checkbox = ({
  id = 'checkbox',
  text = 'Checkbox',
  onChange = () => {},
  style = {},
  inputStyle = {},
  textStyle = {},
  ...inputProps
}) => {
  return (
    <label htmlFor="inputDoor" style={style}>
      <input
        {...inputProps}
        id="inputDoor"
        type="checkbox"
        onChange={onChange}
        style={inputStyle}
      />
      <Text style={textStyle}>{text}</Text>
    </label>
  );
}

export default Checkbox;
