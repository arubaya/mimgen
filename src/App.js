import React from 'react';
import { ThemeProvider } from '@mui/material';

import logo from './logo.svg';
import * as Component from './scripts/views/components';
import * as Page from './scripts/views/pages';

import theme from './scripts/utils/theme';

import * as api from './scripts/api';

function App() {
  const [url, setUrl] = React.useState('');

  // React.useEffect(() => {
  //   let isSubscribe = true;
  //   if (isSubscribe) {
  //     async function fetchData() {
  //       const result = await api.generateApi.generate({
  //         bottom_text: 'Huh?',
  //         id: '444501',
  //         top_text: 'WTF'
  //       })
  //       console.log(result);
  //       setUrl(result.url);
  //     }
  //     fetchData();
  //   }
  //   return () => {
  //     isSubscribe = false;
  //   };
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <Page.HomePage />
    </ThemeProvider>
  );
}

export default App;
