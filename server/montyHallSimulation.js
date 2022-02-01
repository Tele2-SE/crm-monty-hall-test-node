const simulate1 = (switchDoor) => {
  let doorWithPrize = 0;
  let guess = Math.floor(Math.random() * 3);

  //If you select door with prize you only win if you choose to not switch door
  if (guess === doorWithPrize) {
    return !switchDoor;
  }

  //If you select door without prize you only win if you choose to switch door
  return switchDoor;
}

const simulate = function (simCount, switchDoor) {
  return Array.from({length: simCount}, (_, i) => i)
    .filter(() => simulate1(switchDoor) === true)
    .length
};

module.exports = (simCount, switchDoor) => simulate(simCount, switchDoor);


