import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: flex-start;
`;

export const SettingsLink = styled(Link)`
  padding: 1rem;
  border-radius: 15px;
  background: ${({ theme: { colorPrimary } }) => colorPrimary};
  box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.2);
  position: relative;

  svg {
    display: block;
    height: 3.8rem;
    width: 3.8rem;
    fill: ${({ theme: { colorSecondary } }) => colorSecondary};
    transition: transform 1s ease;
  }

  &::after {
    content: 'Settings';
    position: absolute;
    top: -40%;
    left: 0;
    opacity: 0;
    pointer-events: none;
    transition: opacity 300ms;
    color: ${({ theme: { colorSecondary } }) => colorSecondary};
  }

  &:hover {
    svg {
      transform: rotate(360deg);
    }
    ::after {
      opacity: 1;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
`;
