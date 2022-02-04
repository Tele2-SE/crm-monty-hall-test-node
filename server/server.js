const express = require('express');
const montyHallSimulation = require('./montyHallSimulation');
const app = express();
const port = 3011;

app.get('/health', (req, res) => res.sendStatus(200));

app.get('/simulations/:simCount/:switchDoor', (req, res) => {
  const {simCount, switchDoor} = req.params;
  res.send({attempts: parseInt(simCount), wins: montyHallSimulation(simCount, switchDoor)})
});

app.get('/simulate/:switchDoor', (req, res) => {
  const {switchDoor} = req.params;
  res.send({win: montyHallSimulation(1, switchDoor) === 1})
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
