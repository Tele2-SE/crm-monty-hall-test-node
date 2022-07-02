import React from "react"
import { Box } from "@mui/material";
import { ResultItem } from "./ResultItem";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PetsIcon from '@mui/icons-material/Pets';

export const Result = (props) => (
  <Box
    display="flex"
    flexDirection="row"
  >
    <ResultItem
      label="Cars"
      Icon={DirectionsCarIcon}
      amount={props.carsAmount}
      percent={props.carsPercent}
    />
    <ResultItem
      label="Goats"
      Icon={PetsIcon}
      amount={props.goatsAmount}
      percent={props.goatsPercent}
    />
  </Box>
);
