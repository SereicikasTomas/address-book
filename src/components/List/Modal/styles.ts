import styled, { keyframes } from 'styled-components';

type BackgroundType = { gradient: string };

const backdropAppear = keyframes`
 0% {
  opacity: 0;
 }
 100% {
  opacity: 1;
 }
`;

const modalAppear = keyframes`
 0% {
  opacity: 0;
  transform: translateY(-30px);
 }
 100% {
  opacity: 1;
  transform: translateY(0px);
 }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { backdropColor } }) => backdropColor};
  backdrop-filter: blur(3px);
  animation: ${backdropAppear} 300ms cubic-bezier(0.23, 1, 0.32, 1);

  svg {
    display: block;
    height: 3.5rem;
    width: 3.5rem;
    margin-top: 1rem;
    margin-left: auto;
    fill: #f5f5f5;
    cursor: pointer;
    position: relative;
    transition: transform 300ms;

    &:hover {
      transform: scale(1.3);
    }
  }
`;

export const Modal = styled.div`
  background: ${({ theme: { colorPrimary } }) => colorPrimary};
  animation: ${modalAppear} 300ms cubic-bezier(0.47, 0, 0.745, 0.715) backwards;
  box-shadow: ${({ theme: { boxShadowHover } }) => boxShadowHover};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  animation-delay: 300ms;
  width: 45rem;
`;

export const Gradient = styled.div`
  background-image: linear-gradient(200deg, ${({ gradient }: BackgroundType) => gradient});
  height: 5em;
  display: flex;
  padding: 0 1.5rem;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
`;

export const Picture = styled.img`
  margin-top: auto;
  border-radius: 50%;
  border: 2px solid ${({ theme: { colorPrimary } }) => colorPrimary};
  transform: translateY(50%);
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
`;

export const Name = styled.h3`
  margin-top: auto;
  transform: translateY(125%);
  margin-left: 0.5rem;
`;

export const Body = styled.div`
  display: flex;
  padding: 2.5rem 1.5rem 2rem 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Column = styled.div`
  flex: 1 1 45%;
`;

export const Row = styled.div`
  margin-top: 2rem;

  p {
    margin-top: 1rem;
    margin-left: 1rem;
    font-size: 1.3rem;
  }
`;
