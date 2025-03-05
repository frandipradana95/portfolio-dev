import React, { Fragment, useEffect, useState } from "react";
import { Icons } from "../../utils";
import { Nav, Container, Logo, NavLink, ButtonMenu } from "./styles";

const Navbar = ({ onNav, onNavLink }) => {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		if (!onNavLink) {
			setMenuOpen(false);
			onNav(false);
		}
	});

	// hendel state button klik
	const onButtonClick = () => {
		const isMenu = !menuOpen;
		setMenuOpen(isMenu);
		onNav(isMenu);
	};
	// hendel state link clik
	const onLinkClick = () => {
		const isMenu = false;
		setMenuOpen(isMenu);
		onNav(isMenu);
	};

	return (
		<Fragment>
			<Nav>
				<Container>
					<Logo>
						<a href="#">Fandi Pradana</a>
					</Logo>

					<NavLink open={!menuOpen ? 0 : 1}>
						<a href="#" onClick={() => onLinkClick()}>
							Home
						</a>
						<a href="#project" onClick={() => onLinkClick()}>
							Project
						</a>
						<a href="#contact" onClick={() => onLinkClick()}>
							Contact
						</a>
					</NavLink>
				</Container>
				<ButtonMenu onClick={() => onButtonClick()}>
					{menuOpen ? <Icons.X /> : <Icons.Menu />}
				</ButtonMenu>
			</Nav>
		</Fragment>
	);
};

export default Navbar;
