import React, { Fragment, useEffect, useState } from "react";
import { Icons } from "../../utils";
import { Nav, Container, Logo, NavLink, ButtonMenu } from "./styles";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		window.addEventListener("resize", (e) =>
			e.target.innerWidth >= 768 ? setMenuOpen(false) : setMenuOpen(menuOpen)
		);
	});

	return (
		<Fragment>
			<Nav>
				<Container>
					<Logo>
						<a href="#">Fandi Pradana</a>
					</Logo>

					<NavLink id="nav-link" className={`${menuOpen ? "open" : ""}`}>
						<a href="#" onClick={() => setMenuOpen(!menuOpen)}>
							Home
						</a>
						<a href="#project" onClick={() => setMenuOpen(!menuOpen)}>
							Project
						</a>
						<a href="#contact" onClick={() => setMenuOpen(!menuOpen)}>
							Contact
						</a>
					</NavLink>
				</Container>
				<ButtonMenu id="btn-menu" onClick={() => setMenuOpen(!menuOpen)}>
					<Icons.Menu />
				</ButtonMenu>
			</Nav>
		</Fragment>
	);
};

export default Navbar;
