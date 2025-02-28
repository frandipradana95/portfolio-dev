import styled from "styled-components";
import { Colors } from "./Colors";

export const ContactContainer = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;

	@media (max-width: 768px) {
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
`;

export const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	background: white;
	padding: 2rem;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
	width: 100%;
	height: auto;
`;

export const ContactInput = styled.input`
	width: 100%;
	margin-top: 20px;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	font-size: 16px;
`;

export const ContactTextArea = styled.textarea`
	width: 100%;
	padding: 10px;
	margin-top: 20px;
	border: 1px solid #ccc;
	border-radius: 5px;
	font-size: 16px;
	height: 10rem;
	resize: none;
`;

export const ContactButton = styled.button`
	width: 100%;
	padding: 10px;
	margin-top: 20px;
	background-color: ${Colors.primary};
	color: white;
	border: none;
	border-radius: 5px;
	font-size: 16px;
	cursor: pointer;
	&:hover {
		background-color: ${Colors.light};
	}
`;
