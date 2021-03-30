import { CardProps } from 'types/interfaces';

import * as Styled from './styles';

function Card(props: CardProps): JSX.Element {
  const { firstName, lastName, email, picture, index, gradient } = props;
  return (
    <Styled.Card delay={index}>
      <Styled.Background gradient={gradient}>
        <Styled.Picture src={picture} alt="User picture" />
      </Styled.Background>
      <Styled.Information>
        <p>
          {firstName} {lastName}
        </p>
        <h6>{email}</h6>
      </Styled.Information>
    </Styled.Card>
  );
}

export default Card;
