import { User } from '../../../types/interfaces';

function Card(props: User): JSX.Element {
  const { first } = props;
  return <li>{first}</li>;
}

export default Card;
