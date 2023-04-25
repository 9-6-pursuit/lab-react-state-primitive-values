/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<App score={0} adition={1} />
	</React.StrictMode>,
	document.getElementById("root")
);
