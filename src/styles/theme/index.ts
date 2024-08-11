import { extendTheme } from '@chakra-ui/react';
import { breakpoints, colors, fonts } from './constants';

const theme = extendTheme({
  colors,
  fonts,
  breakpoints
});

export default theme;
