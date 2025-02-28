import styled from "styled-components";
import { Colors } from "./Colors";

export const HomeContainer = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 16px;
	display: flex;
	align-items: center;
	height: 100%;

	@media (max-width: 768px) {
		align-items: normal;
		padding-top: 10rem;
		flex-direction: column;
	}
`;

export const Intro = styled.div`
	width: 100%;
	& h1 {
		font-size: 64px;
		font-weight: bold;
	}

	& p {
		font-size: 28px;
		font-weight: 500;
	}

	& h1 > span {
		color: ${Colors.primary};
	}

	@media (max-width: 768px) {
		& h1 {
			font-size: 44px;
		}

		& p {
			font-size: 20px;
		}
	}
`;

export const Hiro = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	@media (max-width: 768px) {
		padding-top: 5rem;
	}
`;

export const HiroImage = styled.img`
	width: 400px;
	height: 400px;
	border-radius: 50%;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
	object-fit: cover;
	transition: transform 0.3s ease-in-out;
`;
