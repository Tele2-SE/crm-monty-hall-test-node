const express = require('express');
const montyHallSimulation = require('./montyHallSimulation');
const app = express();
const port = 3011;

app.get('/health', (req, res) => res.sendStatus(200));

app.get('/simulations/:simCount/:switchDoor', (req, res) => {
  const { simCount, switchDoor } = req.params;

  const attempts = parseInt(simCount);
  const wins = montyHallSimulation(simCount, JSON.parse(switchDoor));

  console.log("Server Response [ /simulations/:simCount/:switchDoor ]", {
    attempts,
    wins,
  })

  res.status(200).send({
    attempts,
    wins,
  })
});

app.get('/simulate/:switchDoor', (req, res) => {
  const { switchDoor } = req.params;

  const win = montyHallSimulation(1, JSON.parse(switchDoor))

  console.log("Server Response [ /simulate/:switchDoor ]", { win })

  res.status(200).send({
    win,
  })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
