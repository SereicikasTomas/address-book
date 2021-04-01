import * as Styled from './styles';

function Loader(): JSX.Element {
  const string = 'Loading...';
  return (
    <Styled.Wrapper>
      {string.split('').map((sign, index) => (
        <Styled.Span key={index} delay={index}>
          {sign}
        </Styled.Span>
      ))}
    </Styled.Wrapper>
  );
}

export default Loader;
