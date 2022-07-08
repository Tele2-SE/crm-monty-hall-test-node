import { MontyHallSimulation } from "./monty-hall-simulation";
import { MontyHallSimulationResult } from "./monty-hall-simulation-result";
import { getRandomDoor } from "./get-random-door";

///
/// Runs a given number of Monty Hall problem simulations.
///
export const runMontyHallSimulations = (montyHallSimulation: MontyHallSimulation): MontyHallSimulationResult => {
  let numberOfWins = 0;
  for (let runNumber = 1; runNumber <= montyHallSimulation.numberOfRuns; ++runNumber) {
    numberOfWins += runMontyHallSimulation(montyHallSimulation.changeDoor) ? 1 : 0;
  }

  const averageWinPercentage = (100 * numberOfWins) / montyHallSimulation.numberOfRuns;

  return {
    numberOfRuns: montyHallSimulation.numberOfRuns,
    changeDoor: montyHallSimulation.changeDoor,
    averageWinPercentage,
  };
};

///
/// Runs one Monty Hall problem simulation. Returns true if the winning door was selected.
///
const runMontyHallSimulation = (changeDoor: boolean): boolean => {
  const winningDoor = getRandomDoor();
  const firstSelectedDoor = getRandomDoor();
  if (changeDoor) {
    const allDoors = [1, 2, 3];
    const doorsAvailableForSwitch = allDoors.filter((door) => door !== firstSelectedDoor);
    const losingDoorSelectedByHost = doorsAvailableForSwitch.filter((door) => door !== winningDoor)[0];
    const switchedDoor = doorsAvailableForSwitch.filter((door) => door !== losingDoorSelectedByHost)[0];
    return switchedDoor === winningDoor;
  }
  return firstSelectedDoor === winningDoor;
};
