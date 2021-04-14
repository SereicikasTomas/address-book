import { ReactNode, useState, createContext, useContext } from 'react';

import { setToLS, getFromLS } from 'helper-functions';

export const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {
    return;
  },
});

type ContextProps = {
  children: ReactNode;
};

export const ThemeContextProvider = ({ children }: ContextProps): JSX.Element => {
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

export const useTheme = (): { theme: string; toggleTheme: () => void } => {
  const res = useContext(ThemeContext);
  return res;
};
