import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.div`
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  padding: 2rem;
  box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.2);
  background: ${({ theme: { colorPrimary } }) => colorPrimary};
`;

export const BackLink = styled(Link)`
  color: ${({ theme: { colorSecondary } }) => colorSecondary};
  font-size: 1.6rem;
  text-decoration: none;
  width: 6rem;
  display: flex;
  justify-content: space-between;

  svg {
    display: block;
    height: 1.6rem;
    width: 1.6rem;
    fill: ${({ theme: { colorSecondary } }) => colorSecondary};
    transition: transform 300ms ease;
  }

  &:hover {
    svg {
      transform: translateX(-5px);
    }
  }
`;

export const Body = styled.div`
  padding: 2rem;
  margin-top: 7.1rem;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow};
  background: ${({ theme: { colorPrimary } }) => colorPrimary};
`;

export const Section = styled.div`
  display: flex;
  margin: 2rem;
`;
