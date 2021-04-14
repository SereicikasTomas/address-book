import React, { Fragment, useState } from 'react';

import { setToLS, getFromLS } from 'helper-functions';

import { ReactComponent as FRFlag } from 'assets/france.svg';
import { ReactComponent as ESFlag } from 'assets/spain.svg';
import { ReactComponent as CHFlag } from 'assets/switzerland.svg';
import { ReactComponent as GBFlag } from 'assets/united-kingdom.svg';

import { Nationalities } from 'types/interfaces';

import * as Styled from './styles';

function Checkbox(): JSX.Element {
  const initState = getFromLS('nationalities') || { ch: false, es: false, fr: false, gb: false };
  const [nationalities, setNationalities] = useState(initState as Nationalities);
  const keysArray = Object.keys(nationalities);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.currentTarget;
    setNationalities((prevState) => ({ ...prevState, [name]: checked }));
    setToLS('nationalities', { ...nationalities, [name]: checked });
  };

  /**
   * Return correct flag accordingly to nationality
   * @param type short name of the nationality
   * @returns svg as JSX.Element | void
   */
  const renderFlag = (type: string) => {
    switch (type) {
      case 'ch':
        return <CHFlag />;
      case 'es':
        return <ESFlag />;
      case 'fr':
        return <FRFlag />;
      case 'gb':
        return <GBFlag />;
      default:
        return;
    }
  };

  /**
   * Creates markup for the single checkbox component
   * @param nationality short name of the nationality
   * @param index in the array
   * @returns JSX.Element
   */
  const checkboxMarkup = (nationality: string, index: number) => (
    <Styled.Label key={index}>
      {nationality.toUpperCase()}
      <Styled.Input name={nationality} type="checkbox" checked={nationalities[nationality]} onChange={onChange} />
      <Styled.Span />
      {renderFlag(nationality)}
    </Styled.Label>
  );

  /**
   * Loops through all of the nationalities and creates an checkbox element for each of them
   * @returns JSX.Element[]
   */
  const renderCheckboxes = () => keysArray.map((nationality, index) => checkboxMarkup(nationality, index));

  return <Fragment>{renderCheckboxes()}</Fragment>;
}

export default Checkbox;
