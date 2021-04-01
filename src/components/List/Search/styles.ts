import styled from 'styled-components';

export const Search = styled.input`
  margin-bottom: 5rem;
  margin-right: 3rem;
  border-radius: 15px;
  padding: 2rem 2rem;
  flex: 1;
  border: none;
  outline: none;
  box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.2);
  background: ${({ theme: { colorPrimary } }) => colorPrimary};
  font-size: 1.6rem;
`;
