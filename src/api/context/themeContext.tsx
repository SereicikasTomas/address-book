import { useState, createContext, useContext } from 'react';

import { setToLS, getFromLS } from 'helper-functions';

import { ThemeContextProps } from 'types/types';

export const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {
    return;
  },
});

/**
 * React provider for managing theme
 */
export const ThemeContextProvider = ({ children }: ThemeContextProps): JSX.Element => {
  const localTheme = getFromLS('theme') || 'dark';
  const [theme, setTheme] = useState(localTheme as string);

  const toggleTheme = () => {
    if (theme === 'light') {
      setToLS('theme', 'dark');
      setTheme('dark');
    } else {
      setToLS('theme', 'light');
      setTheme('light');
    }
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

/**
 * Hook used to get the values from themeProvider
 * @returns context containing theme and function for setting theme
 */
export const useTheme = (): { theme: string; toggleTheme: () => void } => {
  const res = useContext(ThemeContext);
  return res;
};
