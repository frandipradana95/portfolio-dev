import styled from "styled-components";
import { Colors } from "../../utils";

// style

export const Nav = styled.nav`
	position: fixed;
	top: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 30px;
	transition: all 0.3s ease;
	background: rgba(255, 255, 255, 0.3); /* Warna transparan */
	backdrop-filter: blur(10px); /* Efek blur */
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	z-index: 1000;
`;

export const Container = styled.div`
	width: 90%;
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled.h1`
	font-size: 1.5rem;
	font-weight: bold;
	& > a {
		color: ${Colors.dark()};
	}
`;

export const NavLink = styled.div`
	display: flex;
	gap: 20px;
	padding-top: 5px;

	@media (max-width: 768px) {
		position: absolute;
		top: -400%;
		right: 0;
		width: 15rem;
		background: rgba(255, 255, 255, 0.3); /* Warna transparan */
		backdrop-filter: blur(10px); /* Efek blur */
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
		flex-direction: column;
		padding: 1.3rem;
		gap: 15px;
		display: flex;
		transition: ease 0.3s;

		&.open {
			top: 55px;
		}
	}

	& > a {
		text-decoration: none;
		font-size: 1rem;
		font-weight: normal;
		color: ${Colors.dark()};
		transition: color 0.3s;

		&::after {
			content: "";
			width: 100%;
			height: 0.1rem;
			margin-top: 0.2rem;
			background-color: ${Colors.primary()};
			display: block;
			border-radius: 10%;
			transform: scaleX(0);
			transition: linear 0.3s;
			@media (max-width: 768px) {
				transform-origin: 0 0;
			}
		}

		&:hover::after {
			transform: scaleX(0.7);
		}

		&:hover {
			color: ${Colors.primary()};
		}
	}
`;

export const ButtonMenu = styled.button`
	border: none;
	background: none;
	cursor: pointer;
	display: none;

	@media (max-width: 768px) {
		display: block;
	}
`;

export const disabeleForNavlink = styled.div``;
