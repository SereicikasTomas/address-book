import { useState } from 'react';

import { setToLS, getFromLS } from 'helper-functions';

import { ReactComponent as Moon } from 'assets/moon-solid.svg';
import { ReactComponent as Sun } from 'assets/sun-solid.svg';

import * as Styled from './styles';

function ThemeSwitch(): JSX.Element {
  const theme = getFromLS('theme') === 'light';
  const [isLight, setIsLight] = useState(theme);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.currentTarget;
    setIsLight(checked);
    setToLS('theme', checked ? 'light' : 'dark');
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
