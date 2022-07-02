import React from "react"
import { Box, Typography } from "@mui/material";

export const ResultItem = (props) => (
  <Box
    display="flex"
    flex={1}
    flexDirection="column"
    gap="8px"
    alignItems="center"
  >
    <props.Icon fontSize="large" />
    <Typography variant="body2">Number of {props.label}</Typography>
    <Typography variant="h4">{props.amount} ({props.percent}%)</Typography>
  </Box>
)
