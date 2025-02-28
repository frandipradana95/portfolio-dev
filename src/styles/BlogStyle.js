import { Link } from "react-router-dom";
import { Colors } from "./Colors";

const { default: styled } = require("styled-components");

export const BlogContainer = styled.div`
	max-width: 800px;
	margin: auto;
	padding: 0 16px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 8rem;
`;

export const BlogTitle = styled.h1`
	text-align: center;
	color: ${Colors.secondary};
	padding-bottom: 2rem;
`;

export const BlogList = styled.ul`
	list-style: none;
	padding: 0;
`;

export const BlogItem = styled.li`
	margin: 10px 0;
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 5px;
	background-color: #f9f9f9;
`;

export const BlogLink = styled(Link)`
	text-decoration: none;
	font-size: 18px;
	color: #007bff;
`;
