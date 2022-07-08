///
/// Returns 1, 2, or 3 randomly.
///
export const getRandomDoor = (): number => {
  return 1 + Math.floor(Math.random() * 3);
};
