import React, { useState, useEffect } from "react";
import "./style.css";
import { Icons } from "../../utils";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
			<div className="container">
				<div className="logo">Portfolio</div>
				<div className="nav-links">
					<a href="#home">Home</a>
					<a href="#about">About</a>
					<a href="#projects">Projects</a>
					<a href="#contact">Contact</a>
				</div>
				<button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
					<Icons name={!menuOpen ? "menu" : "x"} />
				</button>
			</div>
			{menuOpen && (
				<div className="mobile-menu">
					<a href="#home" onClick={() => setMenuOpen(false)}>
						Home
					</a>
					<a href="#about" onClick={() => setMenuOpen(false)}>
						About
					</a>
					<a href="#projects" onClick={() => setMenuOpen(false)}>
						Projects
					</a>
					<a href="#contact" onClick={() => setMenuOpen(false)}>
						Contact
					</a>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
