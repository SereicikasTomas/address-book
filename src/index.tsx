import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { ThemeContextProvider } from 'api/context/themeContext';

function RootComponent() {
  return (
    <React.StrictMode>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </React.StrictMode>
  );
}

ReactDOM.render(<RootComponent />, document.getElementById('root'));
