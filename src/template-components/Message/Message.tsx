import { Fragment } from 'react';

import * as Styled from './styles';

import { MessageProps } from 'types/types';
import { Messages } from 'types/interfaces';

const messages: Messages = Object.freeze({
  noMatch: 'Unfortunately nothing matches your search...',
  searching: 'New users cannot be fetched while searching for existing ones.',
  end: 'End of user catalog.',
  error: 'An error has occured. Please contact our customer support.',
});

function Message({ types }: MessageProps): JSX.Element {
  // Check which messages are true and should be displayed
  const messagesToShow = Object.keys(types).filter((type) => types[type]);

  const renderMessages = () => {
    return messagesToShow.map((message) => (
      <Styled.Wrapper key={message}>
        <h3>{messages[message]}</h3>
      </Styled.Wrapper>
    ));
  };

  return <Fragment>{renderMessages()}</Fragment>;
}

export default Message;
