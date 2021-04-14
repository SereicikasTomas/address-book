import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Check = styled.input`
  display: none;

  &:checked ~ span {
    transform: translateX(4rem);
  }
`;

export const Label = styled.label`
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 0.5rem;
  position: relative;
  height: 4rem;
  width: 8rem;
  border: 2px solid ${({ theme: { colorSecondary } }) => colorSecondary};

  svg {
    height: 2.8rem;
    width: 2.8rem;
    fill: #f1c40f;
  }
`;

export const Ball = styled.span`
  background-color: ${({ theme: { colorSecondary } }) => colorSecondary};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 3px;
  height: 3rem;
  width: 3rem;
  transform: translateX(0px);
  transition: transform 0.2s linear;
`;
