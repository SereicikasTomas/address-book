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
  padding: 0.5rem;
  position: relative;
  height: 4rem;
  width: 8rem;

  svg {
    height: 3rem;
    width: 3rem;
    fill: #f1c40f;
  }
`;

export const Ball = styled.span`
  background-color: ${({ theme: { colorSecondary } }) => colorSecondary};
  border-radius: 50%;
  position: absolute;
  top: 4px;
  left: 4px;
  height: 3.2rem;
  width: 3.2rem;
  transform: translateX(0px);
  transition: transform 0.2s linear;
`;
