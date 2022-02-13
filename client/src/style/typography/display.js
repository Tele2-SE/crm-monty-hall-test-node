import { getFontSizeAndLineHeight } from './util';

export const DISPLAY_1 = {
  ...getFontSizeAndLineHeight(4, 1.3),
  fontWeight: 500,
};

export const DISPLAY_2 = {
  ...getFontSizeAndLineHeight(2, 1.3),
  fontWeight: 600,
};
