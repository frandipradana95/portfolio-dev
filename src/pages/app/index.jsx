import React, { Fragment } from "react";
import { Navbar } from "../../components";
import Home from "../home";
import Project from "../project";

const App = () => {
	return (
		<Fragment>
			<Navbar />
			<Fragment>
				<Home />
				<Project />
			</Fragment>
		</Fragment>
	);
};

export default App;
