import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
`;

export const Label = styled.label`
  cursor: pointer;
  user-select: none;
  font-size: 1.8rem;
  margin-right: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 6rem;

  svg {
    display: block;
    height: 6rem;
    width: 6rem;
    opacity: 0.6;
    transition: opacity 300ms ease;
  }

  &:hover input ~ span {
    opacity: 0.6;
  }
`;

export const Input = styled.input`
  opacity: 0;
  cursor: pointer;
  display: none;

  &:checked ~ span:after {
    opacity: 1;
  }

  &:checked ~ svg {
    opacity: 1;
  }
`;

export const Span = styled.span`
  position: relative;
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 3px;
  background: ${({ theme: { colorSecondary } }) => colorSecondary};
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  transition: opacity 300ms ease;

  &:after {
    content: '';
    position: absolute;
    opacity: 0;
    left: 0.4rem;
    top: 0rem;
    width: 0.8rem;
    height: 1.3rem;
    border: solid ${({ theme: { colorPrimary } }) => colorPrimary};
    border-width: 0 3px 3px 0;
    border-radius: 3px;
    transform: rotate(45deg);
    transition: opacity 300ms ease;
  }
`;
