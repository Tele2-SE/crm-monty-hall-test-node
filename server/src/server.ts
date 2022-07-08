import express, { Express, Request, Response } from "express";
import { runMontyHallSimulations } from "./run-monty-hall-simulations";
import { MontyHallSimulation } from "./monty-hall-simulation";

const app: Express = express();

app.use(express.json());

app.get("/health", (req, res) => res.sendStatus(200));

app.post("/montyhall", (req: Request, res: Response) => {
  const montyHallSimulation = req.body as MontyHallSimulation;

  // Validate
  if (typeof montyHallSimulation.numberOfRuns !== "number" || montyHallSimulation.numberOfRuns < 1 || typeof montyHallSimulation.changeDoor !== "boolean") {
    res.send({
      numberOfRuns: 0,
      changeDoor: false,
      averageWinPercentage: 0,
    });
  }

  const montyHallSimulationResult = runMontyHallSimulations(montyHallSimulation);
  res.send(montyHallSimulationResult);
});

const port = process.env["port"] || 3011;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

server.on("error", console.error);
