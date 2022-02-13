import React from 'react';
import {uiStyle} from '../style';

const styles = {};

const NumberInput = ({
  autoFocus = true,
  defaultValue = undefined,
  placeholder = 'Placeholder',
  onChange = () => {},
  onFocus = () => {},
  style = {},
  ...inputProps
}) => {
  const componentStyle = Object.assign({},
    styles.inputField,
    style,
  );

  return (
    <input
      {...inputProps}
      type="number"
      autoFocus={autoFocus}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      style={componentStyle}
    />
  );
}

export default NumberInput;

Object.assign( styles, {
  inputField: {
    outline: 'none',
    margin: uiStyle.spacing.components.small,
    textAlign: 'center',
    border: `2px solid ${uiStyle.colors.border}`,
    borderRadius: '6px',
    backgroundColor: uiStyle.colors.backgroundInteractive,
    color: uiStyle.colors.onBackgroundInteractive,
    ...uiStyle.typography.INPUT_NUMBERS,
  },
} );
