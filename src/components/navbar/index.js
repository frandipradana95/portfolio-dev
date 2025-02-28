import { Fragment, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavlinkMd, NavlinkMobile } from "./../navlink";
import {
	Brand,
	ButtonMenu,
	DisableNavLink,
	Nav,
	NavContainer,
	ToggleMenu,
} from "../../styles";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Fragment>
			<Nav>
				<NavContainer>
					<Brand>Frandi Pradana</Brand>
					<NavlinkMd isOpen={isOpen} setIsOpen={(v) => setIsOpen(v)} />
					<ToggleMenu>
						<ButtonMenu onClick={() => setIsOpen(!isOpen)}>
							{isOpen ? <X size={30} /> : <Menu size={30} />}
						</ButtonMenu>
					</ToggleMenu>
				</NavContainer>

				<NavlinkMobile isOpen={isOpen} setIsOpen={(v) => setIsOpen(v)} />
			</Nav>
			{isOpen && (
				<DisableNavLink onClick={() => setIsOpen(false)}></DisableNavLink>
			)}
		</Fragment>
	);
}
