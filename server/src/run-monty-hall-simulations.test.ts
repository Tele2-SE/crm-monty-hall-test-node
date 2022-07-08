import { MontyHallSimulation } from "./monty-hall-simulation";
import { MontyHallSimulationResult } from "./monty-hall-simulation-result";
import { getRandomDoor } from "./get-random-door";
import { runMontyHallSimulations } from "./run-monty-hall-simulations";

jest.mock("./get-random-door", () => {
  const originalModule = jest.requireActual("./get-random-door");

  return {
    __esModule: true,
    ...originalModule,
    getRandomDoor: jest.fn(() => 1),
  };
});

describe("runMontyHallSimulations()", () => {
  it("should return 100% when a winning door is selected", () => {
    (getRandomDoor as jest.MockedFunction<typeof getRandomDoor>).mockImplementationOnce(() => 1).mockImplementationOnce(() => 1);

    const montyHallSimulation: MontyHallSimulation = {
      numberOfRuns: 1,
      changeDoor: false,
    };

    const montyHallSimulationResult: MontyHallSimulationResult = runMontyHallSimulations(montyHallSimulation);

    expect(montyHallSimulationResult.averageWinPercentage).toEqual(100);
  });

  it("should return 0% when a losing door is selected", () => {
    (getRandomDoor as jest.MockedFunction<typeof getRandomDoor>).mockImplementationOnce(() => 1).mockImplementationOnce(() => 2);
    const montyHallSimulation: MontyHallSimulation = {
      numberOfRuns: 1,
      changeDoor: false,
    };

    const montyHallSimulationResult: MontyHallSimulationResult = runMontyHallSimulations(montyHallSimulation);

    expect(montyHallSimulationResult.averageWinPercentage).toEqual(0);
  });

  it("should return 75% when one losing door and three winning doors are selected", () => {
    (getRandomDoor as jest.MockedFunction<typeof getRandomDoor>)
      .mockImplementationOnce(() => 1)
      .mockImplementationOnce(() => 2)
      .mockImplementationOnce(() => 1)
      .mockImplementationOnce(() => 1)
      .mockImplementationOnce(() => 1)
      .mockImplementationOnce(() => 1)
      .mockImplementationOnce(() => 1)
      .mockImplementationOnce(() => 1);
    const montyHallSimulation: MontyHallSimulation = {
      numberOfRuns: 4,
      changeDoor: false,
    };

    const montyHallSimulationResult: MontyHallSimulationResult = runMontyHallSimulations(montyHallSimulation);

    expect(montyHallSimulationResult.averageWinPercentage).toEqual(75);
  });

  it("should return 0% when a winning door is selected but changed to another door", () => {
    (getRandomDoor as jest.MockedFunction<typeof getRandomDoor>).mockImplementationOnce(() => 1).mockImplementationOnce(() => 1);
    const montyHallSimulation: MontyHallSimulation = {
      numberOfRuns: 1,
      changeDoor: true,
    };

    const montyHallSimulationResult: MontyHallSimulationResult = runMontyHallSimulations(montyHallSimulation);

    expect(montyHallSimulationResult.averageWinPercentage).toEqual(0);
  });

  it("should return 100% when a losing door is selected but changed to another door", () => {
    (getRandomDoor as jest.MockedFunction<typeof getRandomDoor>).mockImplementationOnce(() => 1).mockImplementationOnce(() => 2);
    const montyHallSimulation: MontyHallSimulation = {
      numberOfRuns: 1,
      changeDoor: true,
    };

    const montyHallSimulationResult: MontyHallSimulationResult = runMontyHallSimulations(montyHallSimulation);

    expect(montyHallSimulationResult.averageWinPercentage).toEqual(100);
  });

  it("should return same numberOfRuns and changeDoor as given", () => {
    const montyHallSimulation: MontyHallSimulation = {
      numberOfRuns: 12,
      changeDoor: false,
    };

    const montyHallSimulationResult: MontyHallSimulationResult = runMontyHallSimulations(montyHallSimulation);

    expect(montyHallSimulationResult.numberOfRuns).toEqual(12);
    expect(montyHallSimulationResult.changeDoor).toEqual(false);
  });
});
