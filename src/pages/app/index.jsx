import React, { Fragment } from "react";
import { Navbar } from "../../components";
import Home from "../home";
import Project from "../project";
import Contact from "../contact";

const App = () => {
	return (
		<Fragment>
			<Navbar />
			<Fragment>
				<Home />
				<Project />
				<Contact />
			</Fragment>
		</Fragment>
	);
};

export default App;
