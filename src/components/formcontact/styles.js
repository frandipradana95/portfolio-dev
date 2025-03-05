import styled from "styled-components";
import { Colors } from "../../utils";

// form
export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const Input = styled.input`
	width: 100%;
	padding: 8px;
	border: 1px solid ${Colors.secondary()};
	border-radius: 8px;
`;

export const TextArea = styled.textarea`
	width: 100%;
	padding: 8px;
	border: 1px solid ${Colors.secondary()};
	border-radius: 8px;
	height: 100%;
	resize: none;
`;

export const ButtonContact = styled.button`
	width: 100%;
	background-color: ${Colors.primary()};
	color: white;
	padding: 8px;
	border-radius: 8px;
	cursor: pointer;
	border: none;
	font-size: 16px;

	&:hover {
		background-color: ${Colors.primary(0.8)};
	}
`;
