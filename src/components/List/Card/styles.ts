import styled, { keyframes } from 'styled-components';

type CardType = { delay: number };
type BackgroundType = { gradient: string };

const appearAnimation = keyframes`
 0% {
  opacity: 0;
  transform: translateY(-30px);
 }
 100% {
  opacity: 1;
  transform: translateY(0px);
 }
`;

export const Card = styled.li`
  position: relative;
  flex: 1 1 25rem;
  max-width: 40rem;
  animation: ${appearAnimation} 600ms backwards;
  animation-delay: ${({ delay }: CardType) => (delay % 50) * 100 + 'ms'};
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow};
  transition: transform 300ms cubic-bezier(0.47, 0, 0.745, 0.715);
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  background: ${({ theme: { colorPrimary } }) => colorPrimary};
  cursor: pointer;

  /* using ::after pseudo element to 
  create smoother box shadow animation */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    box-shadow: ${({ theme: { boxShadowHover } }) => boxShadowHover};
    transition: opacity 300ms cubic-bezier(0.47, 0, 0.745, 0.715);
    z-index: -1;
    border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  }

  &:hover {
    transform: scale(1.05) translateY(-10px);
    &::after {
      opacity: 1;
    }
  }
`;

export const Background = styled.div`
  background-image: linear-gradient(200deg, ${({ gradient }: BackgroundType) => gradient});
  height: 10rem;
  display: flex;
  padding-left: 1.5rem;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
`;

export const Picture = styled.img`
  margin-top: auto;
  border-radius: 50%;
  border: 2px solid ${({ theme: { colorPrimary } }) => colorPrimary};
  transform: translateY(50%);
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
`;

export const Information = styled.div`
  padding: 4rem 1.5rem 2rem;
`;

export const Row = styled.div`
  margin-top: 2rem;

  p {
    margin-top: 0.5rem;
    margin-left: 1rem;
    font-size: 1.3rem;
  }
`;
