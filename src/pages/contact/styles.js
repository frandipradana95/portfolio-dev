import styled from "styled-components";
import { Colors } from "../../utils";

export const Section = styled.section`
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	flex-direction: column;
`;

export const Container = styled.div`
	background-color: white;
	padding: 24px;
	border-radius: 16px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	max-width: 400px;
	width: 100%;
	& h2 {
		font-size: 24px;
		font-weight: bold;
		text-align: center;
		margin-bottom: 1.8rem;
	}
`;

export const Modal = styled.div`
	display: flex;
	padding: 4rem;
	flex-direction: column;
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	align-items: center;
	transform: scaleY(${(props) => props.scale});
	transition: linear 0.3s;
`;

export const ModalContainer = styled.div`
	background-color: ${Colors.success(0.6)};
	padding: 24px;
	border-radius: 16px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	max-width: 400px;
	width: 100%;
	display: flex;
	flex-direction: row;
	color: ${Colors.dark()};

	& > div {
		flex: 1;
		padding: 1px;
		& > p {
			padding: 1px;
			font-weight: 200;
			color: ${Colors.dark()};
		}

		& > h3 {
			font-weight: bold;
			color: ${Colors.dark()};
			display: block;
			&::after {
				content: "";
				background-color: ${Colors.dark(0.5)};
				height: 2px;
				width: 100%;
				display: block;
			}
		}
	}

	& > button {
		border: none;
		background: none;
		cursor: pointer;
	}
`;
