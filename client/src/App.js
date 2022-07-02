import React, { useCallback, useState } from "react";
import axios from "axios";
import { Result } from "./Result";
import {
  Box,
  Button,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

const App = () => {
  const [state, setState] = useState({
    // logic
    displayResult: false,

    // input
    simCount: 1000,
    switchDoor: "yes",

    // calculated
    carsAmount: 0,
    carsPercent: 0,
    goatsAmount: 0,
    goatsPercent: 0,
  })

  const onSubmit = useCallback(() =>
    axios.get(`/simulations/${state.simCount}/${state.switchDoor === "yes"}`)
      .then((response) => {
        const attempts = response.data.attempts;
        const wins = response.data.wins;

        const carsAmount = wins;
        const carsPercent = Math.round((wins / attempts) * 100);
        const goatsAmount = attempts - wins;
        const goatsPercent = 100 - carsPercent;

        setState((current) => ({
          ...current,
          displayResult: true,
          carsAmount,
          carsPercent,
          goatsAmount,
          goatsPercent,
        }))
      })
      .catch(console.error)
  , [state, setState])

  return (
    <Box
      display="flex"
      width="80%"
      marginTop="32px"
      marginRight="auto"
      marginLeft="auto"
    >
      <Box
        display="flex"
        flex={1}
        flexDirection="column"
        gap="24px"
        justifyContent="center"
      >
        <Typography variant="h3">Simulate the game</Typography>
        <Typography>How many times do you want the computer to run the game?</Typography>
        <TextField
          onChange={(evt) => setState((current) => ({
            ...current,
            simCount: evt.target.value,
          }))}
          value={state.simCount} />
        <Typography>Do you want to switch door?</Typography>
        <ToggleButtonGroup
          onChange={(evt) => setState((current) => ({
            ...current,
            switchDoor: evt.target.value,
          }))}
          value={state.switchDoor}
        >
          <ToggleButton value="yes">Yes</ToggleButton>
          <ToggleButton value="no">No</ToggleButton>
        </ToggleButtonGroup>
        <Button
          onClick={onSubmit}
          variant="contained"
        >{state.displayResult ? "Go Again!" : "Go!"}</Button>
        {state.displayResult ? (
          <Result
            carsAmount={state.carsAmount}
            carsPercent={state.carsPercent}
            goatsAmount={state.goatsAmount}
            goatsPercent={state.goatsPercent}
          />
        ) : null}
      </Box>
    </Box>
  )
}

export default App
