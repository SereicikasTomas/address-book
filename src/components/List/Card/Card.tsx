import { CardProps } from 'types/interfaces';

import * as Styled from './styles';

function Card(props: CardProps): JSX.Element {
  const { firstName, lastName, email, picture, index, gradient, username } = props;
  return (
    <Styled.Card delay={index}>
      <Styled.Background gradient={gradient}>
        <Styled.Picture src={picture} alt="User picture" />
      </Styled.Background>
      <Styled.Information>
        <Styled.Name>
          {firstName} {lastName}
        </Styled.Name>
        <Styled.Row>
          <h6>Username</h6>
          <p>{username}</p>
        </Styled.Row>
        <Styled.Row>
          <h6>Email</h6>
          <p>{email}</p>
        </Styled.Row>
      </Styled.Information>
    </Styled.Card>
  );
}

export default Card;
