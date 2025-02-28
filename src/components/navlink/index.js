import {
	MdMenu,
	MobileMenu,
	NavLinkMd,
	NavLinkMobile,
} from "../../styles/NavbarStyle";

export const NavlinkMobile = ({ isOpen, setIsOpen }) => {
	return (
		isOpen && (
			<MobileMenu>
				<NavLinkMobile to={"/"} onClick={() => setIsOpen(false)}>
					Home
				</NavLinkMobile>
				<NavLinkMobile to={"/project"} onClick={() => setIsOpen(false)}>
					Project
				</NavLinkMobile>
				<NavLinkMobile to={"/Blog"} onClick={() => setIsOpen(false)}>
					Blog
				</NavLinkMobile>
				<NavLinkMobile to={"/contact"} onClick={() => setIsOpen(false)}>
					Contact
				</NavLinkMobile>
			</MobileMenu>
		)
	);
};

export const NavlinkMd = ({ isOpen, setIsOpen }) => {
	return (
		<MdMenu>
			<NavLinkMd to={"/"}>Home</NavLinkMd>
			<NavLinkMd to={"/project"}>Project</NavLinkMd>
			<NavLinkMd to={"/blog"}>Blog</NavLinkMd>
			<NavLinkMd to={"/contact"}>Contact</NavLinkMd>
		</MdMenu>
	);
};
