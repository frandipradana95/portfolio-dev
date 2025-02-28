import styled from "styled-components";
import { Colors } from "./Colors";
import { NavLink } from "react-router-dom";

// navbar style
export const Nav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	backdrop-filter: blur(10px);
	background-color: rgba(255, 255, 255, 0.3);
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	z-index: 100;
	transition: all 0.3s ease-in-out;
`;

export const NavContainer = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 64px;
`;

export const Brand = styled.h1`
	font-size: 24px;
	font-weight: bold;
	color: ${Colors.secondary};
`;

export const ToggleMenu = styled.div`
	display: none;

	@media (max-width: 768px) {
		display: block;
	}
`;

export const ButtonMenu = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	font-size: 24px;
	color: ${Colors.secondary};
`;

export const DisableNavLink = styled.div`
	display: none;

	@media (max-width: 768px) {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: transparent;
		z-index: 51;
		display: block;
	}
`;

// navlink style

export const MobileMenu = styled.div`
	display: none;
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		backdrop-filter: blur(10px);
		background-color: rgba(255, 255, 255, 0.3);
		padding: 16px;
		position: fixed;
		width: 30%;
		top: 64px;
		right: 0;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}
`;

export const NavLinkMobile = styled(NavLink)`
	display: none;
	@media (max-width: 768px) {
		display: block;
		color: ${Colors.secondary};
		text-decoration: none;
		padding: 8px 0;
		transition: color 0.3s;
		font-weight: bold;
	}

	&:hover {
		color: ${Colors.primary};
	}

	&.active {
		font-weight: bold;
		display: flex;
		flex-direction: column;
	}

	&.active::after {
		content: "";
		height: 3px;
		width: 80%;
		background-color: ${Colors.primary};
		transform: scale(1);
		margin-top: 2px;
	}
`;

export const MdMenu = styled.div`
	display: flex;
	gap: 24px;
	@media (max-width: 768px) {
		display: none;
	}
`;

export const NavLinkMd = styled(NavLink)`
	color: ${Colors.secondary};
	text-decoration: none;
	font-size: 16px;
	transition: color 0.3s;
	font-weight: bold;

	&:hover {
		color: ${Colors.primary};
	}

	&.active {
		font-weight: bold;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	&.active::after {
		content: "";
		height: 3px;
		width: 80%;
		background-color: ${Colors.primary};
		transform: scale(1);
		margin-top: 2px;
	}
`;
