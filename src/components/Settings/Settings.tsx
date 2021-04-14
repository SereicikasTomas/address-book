import { Fragment } from 'react';

import Checkboxes from './Checkboxes';
import ThemeSwitch from './ThemeSwitch';

import { ReactComponent as Arrow } from 'assets/arrow-left.svg';

import * as Styled from './styles';

function Settings(): JSX.Element {
  return (
    <Fragment>
      <Styled.Header>
        <Styled.BackLink to="/">
          <Arrow /> Back
        </Styled.BackLink>
      </Styled.Header>

      <Styled.Body>
        <form>
          <h2>Nationalities</h2>
          <Styled.Section>
            <Checkboxes />
          </Styled.Section>
          <h2>Theme</h2>
          <Styled.Section>
            <ThemeSwitch />
          </Styled.Section>
        </form>
      </Styled.Body>
    </Fragment>
  );
}

export default Settings;
