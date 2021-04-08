import * as Styled from './styles';
import { MessageProps } from 'types/types';
import { Messages } from 'types/interfaces';

function Message({ type }: MessageProps): JSX.Element {
  const messages: Messages = {
    error: 'An error has occured. Please contact our customer support.',
    noMatch: 'Unfortunately nothing matches your search...',
    searching: 'New users cannot be fetched while searching for existing ones.',
    end: 'End of user catalog.',
  };

  return (
    <Styled.Wrapper>
      <Styled.Message>{messages[type]}</Styled.Message>
    </Styled.Wrapper>
  );
}

export default Message;
