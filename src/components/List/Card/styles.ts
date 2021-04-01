import styled, { keyframes } from 'styled-components';

type CardType = { delay: number };
type BackgroundType = { gradient: string };

const appearAnimation = keyframes`
 0% {
  opacity: 0;
  transform: translateY(-50px);
 }
 100% {
  transform: translateY(0px);
  opacity: 1;
 }
`;

export const Card = styled.li`
  position: relative;
  flex: 0 1 calc(25% - 3rem);
  animation: ${appearAnimation} 800ms backwards;
  animation-delay: ${({ delay }: CardType) => (delay % 50) * 150 + 'ms'};
  box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.1);
  transition: transform 500ms ease;
  border-radius: 15px;

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
    box-shadow: 0 2rem 4rem 0 rgba(0, 0, 0, 0.3);
    transition: opacity 500ms;
    z-index: -1;
    border-radius: 15px;
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
  border-radius: 15px;
`;

export const Picture = styled.img`
  margin-top: auto;
  border-radius: 50%;
  border: 2px solid ${({ theme: { colorPrimary } }) => colorPrimary};
  transform: translateY(50%);
  border-radius: 15px;
`;

export const Information = styled.div`
  padding: 4rem 1.5rem 2rem;
`;

export const Name = styled.h3`
  color: ${({ theme: { colorSecondary } }) => colorSecondary};
`;

export const Row = styled.div`
  color: ${({ theme: { colorSecondary } }) => colorSecondary};
  margin-top: 1rem;

  p {
    margin-left: 1rem;
    font-size: 1.2rem;
  }
`;