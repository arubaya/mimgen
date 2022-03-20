import React from 'react';
import { ThemeProvider } from '@mui/material';

import Router from './scripts/route';
import theme from './scripts/utils/theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
