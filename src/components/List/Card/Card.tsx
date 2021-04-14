import { CardProps } from 'types/types';

import * as Styled from './styles';

function Card(props: CardProps): JSX.Element {
  const { firstName, lastName, email, picture, index, gradient, username, setModal } = props;

  return (
    <Styled.Card delay={index} onClick={() => setModal((prevState) => ({ ...prevState, open: true, user: props }))}>
      <Styled.Background gradient={gradient}>
        <Styled.Picture src={picture} alt="User picture" />
      </Styled.Background>

      <Styled.Information>
        <h3>
          {firstName} {lastName}
        </h3>

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
