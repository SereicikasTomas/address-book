import styled from 'styled-components';

export const Search = styled.input`
  margin-right: 3rem;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  padding: 2rem 2rem;
  flex: 1;
  border: none;
  outline: none;
  box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.2);
  background: ${({ theme: { colorPrimary } }) => colorPrimary};
  color: ${({ theme: { colorSecondary } }) => colorSecondary};
  font-size: 1.6rem;

  &::placeholder {
    color: ${({ theme: { colorSecondary } }) => colorSecondary};
  }
`;
