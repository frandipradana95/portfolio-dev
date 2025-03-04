import styled from "styled-components";
import { Colors } from "../../utils";

export const Section = styled.section`
	padding: 80px 0;
	text-align: center;
`;

export const Container = styled.div`
	width: 90%;
	max-width: 1200px;
	margin: 0 auto;

	& h2 {
		font-size: 2.5rem;
		margin-bottom: 30px;
	}
`;

export const ProjectGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 20px;
	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const ProjectCard = styled.div`
	background: rgba(255, 255, 255, 0.1);
	padding: 20px;
	border-radius: 10px;
	transition: transform 0.3s ease;
	&:hover {
		transform: scale(1.05);
	}

	& h3 {
		margin: 15px 0 10px;
		font-size: 1.5rem;
	}

	& p {
		font-size: 1rem;
		color: ${Colors.secondary};
	}
`;
