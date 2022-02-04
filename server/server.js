const express = require('express');
const montyHallSimulation = require('./montyHallSimulation');
const app = express();
const port = 3011;

app.get('/health', (req, res) => res.sendStatus(200));

app.get('/simulations/:simCount/:switchDoor', (req, res) => {
  const { simCount, switchDoor } = req.params;
  res.send(montyHallSimulation(simCount, switchDoor))
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
