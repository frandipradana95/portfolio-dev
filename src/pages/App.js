import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../styles";
import { Navbar } from "../components";
import Home from "./home";
import Project from "./project";
import Contact from "./contact";

const App = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/project" element={<Project />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Fragment>
	);
};

export default App;
