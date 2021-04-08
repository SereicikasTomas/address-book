import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './components/App';
import { lightTheme, darkTheme } from './global-styles/themes';
import GlobalStyles from './global-styles/styles';
import { getFromLS } from 'helper-functions';

function RootComponent() {
  const selectedTheme = getFromLS('theme') === 'light' ? lightTheme : darkTheme;

  return (
    <React.StrictMode>
      <ThemeProvider theme={selectedTheme}>
        <BrowserRouter>
          <GlobalStyles />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}

ReactDOM.render(<RootComponent />, document.getElementById('root'));
