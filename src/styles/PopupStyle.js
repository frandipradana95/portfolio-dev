import styled, { keyframes } from "styled-components";

// Animasi modal
export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const scaleUp = keyframes`
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

export const scaleDown = keyframes`
  from { transform: scale(1); opacity: 1; }
  to { transform: scale(0.8); opacity: 0; }
`;

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	animation: ${({ closing }) => (closing ? fadeOut : fadeIn)} 0.3s forwards;
`;

export const Modal = styled.div`
	padding: 20px;
	border-radius: 10px;
	width: 500px;
	margin-top: 8rem;
	animation: ${({ closing }) => (closing ? scaleDown : scaleUp)} 0.3s forwards;
`;

export const ModalHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	& > div {
		display: flex;
		flex-direction: column;
	}
`;

export const CloseButton = styled.button`
	background: none;
	border: none;
	font-size: 24px;
	cursor: pointer;
`;

export const ErrorText = styled.p`
	color: red;
`;
