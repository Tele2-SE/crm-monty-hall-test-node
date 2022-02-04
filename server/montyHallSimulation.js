const simulate1 = function (switchDoor) {
  let guess = Math.floor(Math.random() * 3);

  if (switchDoor === 'false') {
    return guess === 0 ? 1 : 0;
  }

  if (guess === 2) {
    guess = 1;
  }

  return guess;
};

const simulate = function (simCount, switchDoor) {
  let winCount = 0; // initially
  for (let i = 0; i < simCount; i++) {
    winCount += simulate1(switchDoor);
  }
  return winCount;
};

module.exports = (simCount, switchDoor) => simulate(simCount, switchDoor);

