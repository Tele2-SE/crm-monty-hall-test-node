import React from 'react';
import {uiStyle} from '../style';

const styles = {};

const Text = ({
  variant = 'BODY',
  style = {},
  ...textProps
}) => {
  const componentStyle = Object.assign({},
    styles.base,
    styles[variant.toLowerCase()],
    style,
  );

  switch (variant) {
    case 'DISPLAY_1': 
      return <h1 {...textProps} style={componentStyle} />;
    case 'DISPLAY_2': 
      return <h2 {...textProps} style={componentStyle} />;
    case 'CAPTION':
      return <span {...textProps} style={componentStyle} />
    case 'BODY': // Fallthrough
    default:
      return <span {...textProps} style={componentStyle} />;
  }
}

Text.Display1 = (props) => <Text variant="DISPLAY_1" {...props} />;
Text.Display2 = (props) => <Text variant="DISPLAY_2" {...props} />;
Text.Caption = (props) => <Text variant="CAPTION" {...props} />;
Text.Body = (props) => <Text variant="BODY" {...props} />;

export default Text;

Object.assign( styles, {
  base: {
  },
  display_1: {
    ...uiStyle.typography.DISPLAY_1,
    margin: 0,
    marginBottom: uiStyle.spacing.layout.small,
  },
  display_2: {
    ...uiStyle.typography.DISPLAY_2,
    margin: 0,
    marginBottom: uiStyle.spacing.layout.xsmall,
  },
  body: {
    ...uiStyle.typography.BODY,
  },
  caption: {
    ...uiStyle.typography.CAPTION,
  },
} );
