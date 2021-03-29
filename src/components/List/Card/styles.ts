import styled, { keyframes } from 'styled-components';

type CardType = { delay: number };

const appearAnimation = keyframes`
 0% {
   transform: translateY(50px);
 }
 100% {
  transform: translateY(0px);
  opacity: 1;
 }
`;

export const Card = styled.li`
  border: 1px solid black;
  flex: 0 1 calc(25% - 3rem);
  height: 30rem;
  opacity: 0;
  animation: ${appearAnimation} 1s forwards;
  animation-delay: ${({ delay }: CardType) => (delay % 50) * 150 + 'ms'};
`;
