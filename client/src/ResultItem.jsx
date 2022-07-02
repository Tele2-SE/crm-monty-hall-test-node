import React from "react"
import { Box, Typography } from "@mui/material";

export const ResultItem = (props) => (
  <Box
    display="flex"
    flex={1}
    flexDirection="column"
    alignItems="center"
  >
    <props.Icon />
    <Typography variant="body2">Number of {props.label}</Typography>
    <Typography>{props.amount} ({props.percent}%)</Typography>
  </Box>
)
