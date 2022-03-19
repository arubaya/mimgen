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
    fontFamily: '"Itim", cursive'
  }
});

export default theme;