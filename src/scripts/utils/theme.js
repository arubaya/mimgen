import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      contrastText: '#212b36',
    },
    secondary: {
      main: '#212b36',
      contrastText: '#fff',
    },
    text: {
      primary: '#212b36',
      secondary: '#637381',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: '"Comfortaa", cursive',
    button: {
      fontWeight: 600,
      fontSize: '0.875rem',
      textTransform: 'capitalize',
    },

  }
});

export default theme;