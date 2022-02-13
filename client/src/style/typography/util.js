export const BASE_SIZE = 15;
export const FACTOR = 1.125;

export const getFontSizeAndLineHeight = (step, scale) => {
  const size = BASE_SIZE * Math.pow(FACTOR, step);
  return {
    fontSize: `${size}px`,
    lineHeight: `${size * scale}px`,
  }
}
