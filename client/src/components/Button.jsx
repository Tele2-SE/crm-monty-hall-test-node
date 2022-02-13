import React from 'react';
import {uiStyle} from '../style';

const styles = {};

const Button = ({
  disabled = false,
  text = 'Button',
  onClick = () => {},
  style = {},
  ...buttonProps
}) => {
  const componentStyle = Object.assign({},
    styles.button,
    disabled && styles.disabled,
    style,
  );

  return (
    <button
      {...buttonProps}
      onClick={onClick}
      disabled={disabled}
      style={componentStyle}
    >
      {text}
    </button>
  );
}

export default Button;

Object.assign( styles, {
  button: {
    width: '50%',
    borderRadius: '6px',
    borderStyle: 'none',
    margin: uiStyle.spacing.components.small,
    padding: uiStyle.spacing.components.small,
    backgroundColor: uiStyle.colors.interactiveMain,
    color: uiStyle.colors.onInteractive,
    ...uiStyle.typography.BUTTON,
  },
  disabled: {
    opacity: 0.6,
  },
} );
