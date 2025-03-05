import React from "react";
import App from "./pages/app";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";

// global style
const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Inter",sans-serif;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}


a {
  text-decoration: none;
}`;

// initial reactjs dan global style
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Global />
		<App />
	</React.StrictMode>
);
