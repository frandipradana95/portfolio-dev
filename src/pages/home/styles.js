import styled from "styled-components";
import { Colors } from "../../utils";

export const Section = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	text-align: center;
	padding-top: 80px; /* Tambah jarak atas agar tidak tertutup navbar */
`;

export const Container = styled.div`
	width: 90%;
	max-width: 1200px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 40px;
	@media (max-width: 768px) {
		flex-direction: column;
		text-align: center;
	}
`;

export const Content = styled.div`
	max-width: 600px;

	& h1 {
		font-size: 2.5rem;
		margin-bottom: 10px;
	}

	& p {
		font-size: 1.2rem;
		color: ${Colors.dark()};
		margin-bottom: 20px;
	}
`;

export const BtnContact = styled.a`
	display: inline-block;
	padding: 10px 20px;
	background: ${Colors.primary()};
	color: white;
	text-decoration: none;
	border-radius: 5px;
	transition: 0.3s;

	&:hover {
		background: ${Colors.primary(0.8)};
	}
`;

export const ProfiePicture = styled.div`
	& > img {
		width: 250px;
		height: 250px;
		border-radius: 50%;
		object-fit: cover;
		border: 4px solid white;

		@media (max-width: 768px) {
			width: 200px;
			height: 200px;
		}
	}
`;
