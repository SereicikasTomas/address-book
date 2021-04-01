import styled, { keyframes } from 'styled-components';

type SpanType = { delay: number };

const loadingAnimation = (colorPrimary: string, colorSecondary: string) => keyframes`
  0%{
    transform: translateY(0px);
    color: ${colorSecondary};
  }
  50%{
    transform: translateY(-30px);
    color: ${colorPrimary};
  }
  100%{
    transform: translateY(0px);
    color: ${colorSecondary};
  }
`;

export const Wrapper = styled.div`
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Span = styled.span`
  display: inline-block;
  font-size: 2.4rem;
  margin-left: 1rem;
  color: ${({ theme: { colorPrimary } }) => colorPrimary};
  animation: ${({ theme: { colorPrimary, colorSecondary } }) => loadingAnimation(colorPrimary, colorSecondary)} 1.5s
    cubic-bezier(0.8, 0.5, 0.2, 1.4) infinite;
  transform-origin: bottom center;
  position: relative;
  animation-delay: ${({ delay }: SpanType) => delay * 150 + 'ms'}; ;
`;
