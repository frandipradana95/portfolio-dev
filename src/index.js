import React from "react";
import App from "./pages/app";
import ReactDOM from "react-dom/client";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// my js
// clik semua halaman untuk hide navlink
document.addEventListener("click", (e) => {
	const btnMenu = document.querySelector("#btn-menu");
	const navLink = document.querySelector("#nav-link");
	if (!btnMenu.contains(e.target) && !navLink.contains(e.target)) {
		navLink.classList.remove("open");
	}
});
