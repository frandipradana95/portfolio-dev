import styled from "styled-components";
import { Colors } from "./Colors";
import { Link } from "react-router-dom";

export const ProjectContainer = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 16px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 8rem 20px;
`;

export const ProjectGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 20px;
	width: 100%;
	margin: 8rem;
	justify-content: center;
	max-width: 1000px;
`;

export const ProjectCard = styled.div`
	background-color: white;
	padding: 20px;
	margin: 10px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
	border-radius: 8px;
	text-align: center;
	@media (max-width: 768px) {
		padding: 20px;
	}
`;

export const ProjectImage = styled.img`
	width: 100%;
	border-radius: 5px;
`;

export const ProjectTitle = styled.h3`
	margin: 10px 0;
	color: ${Colors.secondary};
`;

export const ProjectDescription = styled.p`
	font-size: 14px;
	color: ${Colors.secondary};
`;

export const ProjectLinks = styled.div`
	margin-top: 10px;
	display: flex;
	justify-content: center;
	gap: 10px;
`;

export const IconProjectLink = styled.a`
	color: #3333;
	font-size: 24px;
	transition: color 0.3s;

	&:hover {
		color: ${Colors.light};
	}
`;

export const ShowProjectFull = styled(Link)`
	text-decoration: none;
`;
