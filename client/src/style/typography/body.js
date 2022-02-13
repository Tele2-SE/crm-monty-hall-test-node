import { getFontSizeAndLineHeight } from './util';

export const BODY = {
  ...getFontSizeAndLineHeight(0, 1.7),
};

export const CAPTION = {
  ...getFontSizeAndLineHeight(-2, 1.1),
  textTransform: 'uppercase',
};
