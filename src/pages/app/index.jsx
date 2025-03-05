import React, { Fragment, useEffect, useState } from "react";
import { Navbar } from "../../components";
import Home from "../home";
import Project from "../project";
import Contact from "../contact";
import { NavbarlinkHandler } from "./styles";

const App = () => {
	const [isNavlink, setIsNavlink] = useState(false);

	return (
		<Fragment>
			<Navbar
				onNav={(e) => setIsNavlink(e)}
				onNavLink={isNavlink ? true : false}
			/>
			{isNavlink ? (
				<NavbarlinkHandler onClick={() => setIsNavlink(false)} />
			) : (
				<Fragment />
			)}
			<Fragment>
				<Home />
				<Project />
				<Contact />
			</Fragment>
		</Fragment>
	);
};

export default App;
