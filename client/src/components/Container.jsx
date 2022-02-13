import React from 'react';
import {uiStyle} from '../style';

const styles = {};

const Container = ({
  hasPadding = false,
  alignCenter = false,
  variant = 'TRANSPARENT',
  direction = 'column',
  style,
  children,
}) => {
  const componentStyle = Object.assign({},
    styles.base,
    hasPadding && styles.padding,
    alignCenter && styles.alignCenter,
    {flexDirection: direction},
    styles[variant.toLowerCase()],
    style,
  );

  return <div style={componentStyle}>{children}</div>
}

Container.Transparent = (props) => <Container variant="TRANSPARENT" {...props} />;
Container.Primary = (props) => <Container variant="PRIMARY" {...props} />;
Container.Secondary = (props) => <Container variant="SECONDARY" {...props} />;

export default Container;

Object.assign( styles, {
  base: {
    display: 'flex',
    borderRadius: '1rem',
  },
  padding: {
    padding: uiStyle.spacing.components.medium,
  },
  alignCenter: {
    alignItems: 'center',
  },
  primary: {
    backgroundColor: uiStyle.colors.backgroundVariant,
  },
  secondary: {
    backgroundColor: uiStyle.colors.backgroundAccent,
  },
  transparent: {
    backgroundColor: 'transparent',
  }
} );
