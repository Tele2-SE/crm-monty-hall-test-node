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
  return Array.from({length: simCount}, (_, i) => i)
    .filter(() => simulate1(switchDoor) === 1)
    .length
};

module.exports = (simCount, switchDoor) => simulate(simCount, switchDoor);

