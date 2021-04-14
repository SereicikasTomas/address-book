import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import List from '../List';
import Settings from '../Settings';
import { useTheme } from 'api/context/themeContext';
import GlobalStyles from 'global-styles/styles';
import { lightTheme, darkTheme } from 'global-styles/themes';

function App(): JSX.Element {
  const { theme } = useTheme();
  const selectedTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route component={List} exact path="/" />
          <Route component={Settings} exact path="/settings" />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
