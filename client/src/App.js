import React, { useEffect, useState } from 'react';
import useServerHealth from './serverhealth/useServerHealth';
import './App.css';
import Container from './components/Container';
import Text from './components/Text';
import AnalysisBox from './components/AnalysisBox';
import useSimulate from './hooks/useSimulate';
import goat from'./img/goat.png';
import car from'./img/car.png';
import headerImage from'./img/monty-hall.jpg';
import { uiStyle } from './style';
import Checkbox from './components/Checkbox';
import Button from './components/Button';
import NumberInput from './components/NumberInput';

const styles = {};

const App = () => {
  const serverHealth  = useServerHealth();
  const [state, {simulate}] = useSimulate();

  const [isButtonActive, setButtonActive] = useState(false);
  const [buttonLabel, setButtonLabel] = useState('..initializing');

  // Note: improvement will be to use TypeScript and type GameStatus = 'start' | 'idle' | 'ok' | 'error';
  const [gameStatus, setGameStatus] = useState('IDLE'); // IDLE, OK, ERROR
  const [attempts, setAttempts] = useState();
  const [switchDoor, setSwitchDoor] = useState(false);

  const [nrOfCars, setNrOfCars] = useState({value: 0, percentage: 0});
  const [nrOfZonks, setNrOfZonks] = useState({value: 0, percentage: 0}); // see https://s3.amazonaws.com/gs-geo-images/7a01f484-f904-404a-8858-9b01a46cf79e.jpg

  useEffect(() => {
    switch (serverHealth) {
      case 'UP':
        setButtonActive(attempts > 0 ? true : false);
        setButtonLabel(gameStatus === 'IDLE' ? 'Go!' : 'Go again!')
        break;
      case 'DOWN':
        setButtonActive(false);
        setButtonLabel('Sorry, no connection.')
        break;
      case 'UNKNOWN': // fallthrough
      default:
        setButtonActive(false);
        setButtonLabel('Please wait, initializing..')
    }
  }, [serverHealth, gameStatus, attempts]);

  useEffect(() => {
    if (Number(attempts) > 0 && serverHealth === 'UP') {
      setButtonActive(true);
    } else {
      setButtonActive(false)
    }
  }, [attempts, gameStatus, serverHealth])

  useEffect(() => {
    if (state.status === 'ERROR') {
      // TODO: implement error handling
    } else if (state.status !== 'UNDEFINED') {
      setGameStatus('OK');

      const wins = state.status.wins ?? null;
      const winsPercentage = parseInt(Number(wins / attempts * 100).toFixed(0));
      const zonks = attempts - wins;
      const zonksPercentage = parseInt(Number(zonks / attempts * 100).toFixed(0));

      setNrOfZonks({value: zonks, percentage: zonksPercentage})
      setNrOfCars({value: wins, percentage: winsPercentage})
    }
  // Note: effect should just act on state.status changes
  }, [state.status])

  const onStartGame = () => {
    simulate(attempts, switchDoor ? 1 : 0);
  }

  return (
    <div data-testid="App" className="App noselect">
      <Container style={styles.headerContainer} />
      <Container>
        <Container.Primary hasPadding alignCenter>
          <Text.Display1>Simulate the game</Text.Display1>

          <Text>How many times do you want the computer to run the game?</Text>
          <NumberInput
            defaultValue={attempts}
            placeholder='Enter number'
            onChange={(e) => setAttempts(e.target.value)}
            onFocus={(e) => e.target.select()}
          />

          <Checkbox
            id="checkboxSwitchDoor"
            text="I want to switch door"
            onChange={(e) => setSwitchDoor(!!e.target.checked)}
          />

          <Button
            disabled={!isButtonActive}
            text={buttonLabel}
            onClick={onStartGame}
          />

          <Container.Secondary direction="row" style={styles.analysisBoxContainer}>
            <AnalysisBox image={goat} label="Number of Goats" value={nrOfZonks.value} percentage={nrOfZonks.percentage} style={styles.analysisBox} gameStatus={gameStatus} />
            <AnalysisBox image={car} label="Number of Cars" value={nrOfCars.value} percentage={nrOfCars.percentage} style={styles.analysisBox} gameStatus={gameStatus} />
          </Container.Secondary>
        </Container.Primary>
      </Container>
    </div>
  );
}

export default App;

Object.assign( styles, {
  headerContainer: {
    background: `url(${headerImage}) no-repeat top center`,
    backgroundSize: '100% auto',
    width: '100%',
    height: '164px',
    marginTop: uiStyle.spacing.layout.medium,
    marginBottom: uiStyle.spacing.layout.medium,
  },
  analysisBoxContainer: {
    width: '100%',
    marginTop: uiStyle.spacing.layout.large,
  },
  analysisBox: {
    width: '50%',
    padding: uiStyle.spacing.components.small,
  },
} );
