import styled, { keyframes } from 'styled-components';

const pulsing = keyframes`
  0% {
    transform: scale(1) rotate(0);
  }
  33% {
    transform: scale(1.5) rotate(15deg);
  }

  66% {
    transform: scale(1.5) rotate(-15deg);
  }

  100% {
    transform: scale(1) rotate(0);
  }
`;

export const Img = styled.img`
	display: block;
	margin: 200px auto 100px;
	width: 500px;
	animation-name: ${pulsing};
	animation-duration: 4s;
	animation-iteration-count: infinite;
`;
