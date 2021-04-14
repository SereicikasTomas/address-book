import { useState } from 'react';

import { useTheme } from 'api/context/themeContext';

import { ReactComponent as Moon } from 'assets/moon-solid.svg';
import { ReactComponent as Sun } from 'assets/sun-solid.svg';

import * as Styled from './styles';

function ThemeSwitch(): JSX.Element {
  const { theme, toggleTheme } = useTheme();
  const themeBoolean = theme === 'light';
  const [isLight, setIsLight] = useState(themeBoolean);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.currentTarget;
    setIsLight(checked);
    toggleTheme();
  };

  return (
    <Styled.Wrapper>
      <Styled.Label>
        <Styled.Check type="checkbox" checked={isLight} onChange={onChange} />
        <Sun />
        <Moon />
        <Styled.Ball />
      </Styled.Label>
    </Styled.Wrapper>
  );
}

export default ThemeSwitch;
