import React from "react";
import menu from "./menu.svg";
import github from "./github.svg";
import youtube from "./youtube.svg";
import x from "./x.svg";

const Menu = ({ width, height }) => {
	return <img src={menu} alt={"menu"} width={width} height={height} />;
};
const X = ({ width, height }) => {
	return <img src={x} alt={"x"} width={width} height={height} />;
};
const Github = ({ width, height }) => {
	return <img src={github} alt={"github"} width={width} height={height} />;
};
const Youtube = ({ width, height }) => {
	return <img src={youtube} alt={"youtube"} width={width} height={height} />;
};

export default {
	Menu,
	Github,
	Youtube,
	X,
};
