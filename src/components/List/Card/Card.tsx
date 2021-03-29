import { CardProps } from 'types/interfaces';

import * as Styled from './styles';

function Card(props: CardProps): JSX.Element {
  const { firstName, lastName, email, picture, index } = props;
  return (
    <Styled.Card delay={index}>
      <img src={picture} alt="User picture" />
      <p>{firstName}</p>
      <p>{lastName}</p>
      <h6>{email}</h6>
    </Styled.Card>
  );
}

export default Card;
