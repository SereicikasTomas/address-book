import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './components/App';
import { lightTheme } from './global-styles/themes';
import GlobalStyles from './global-styles/styles';

function RootComponent() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          <GlobalStyles />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}

ReactDOM.render(<RootComponent />, document.getElementById('root'));
