import React from 'react';
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import Container from './Container';
import Text from './Text';
import {uiStyle} from '../style';

const styles = {};

const AnalysisBox = ({
  gameStatus = 'IDLE',
  image = null,
  label = '',
  value = null,
  percentage = null,
  style,
}) => {
  return (
    <Container alignCenter style={style}>
      {image !== null &&
        <img src={image} alt="analysisImage" style={styles.image} />
      }
      <Text.Caption style={styles.label}>{label}</Text.Caption>
      {value !== null && percentage !== null && (
        <>
          <Text.Display2 style={styles.values}>
            {gameStatus === 'OK' ? `${value} (${percentage}%)` : '-'}
          </Text.Display2>
          <div style={{alignSelf: 'stretch'}}>
          <ProgressBar
            percent={percentage}
            unfilledBackground={uiStyle.colors.backgroundVariant}
            filledBackground={uiStyle.colors.interactiveMain}
          />
          </div>
        </>
      )}
    </Container>
  );
}

export default AnalysisBox;

Object.assign( styles, {
  image: {
    width: '112px',
    height: 'auto',
    alignSelf: 'center',
  },
  label: {
    color: uiStyle.colors.onBackgroundAccent,
  },
  values: {
    color: uiStyle.colors.onBackgroundAccent,
    ...uiStyle.typography.NUMBER,
  },
} );
