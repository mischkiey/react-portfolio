// Hooks & Methods
import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#b71c1c',
    },
    background: {
      default: '#fffffa',
      paper: '#fffffa',
    },
    text: {
      primary: '#212121',
    },
    action: {
      active: '#212121',
      hover: '#212121',
    },
  },
  typography: {
    fontFamily: '"Cormorant Garamond", "serif"',
    button: {
      fontFamily: '"Poppins", "sans-serif"',
    },
  },
});

export default theme;