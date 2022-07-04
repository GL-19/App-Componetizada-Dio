import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GithubProvider } from "./providers/GithubProvider";

ReactDOM.render(
	<React.StrictMode>
		<GithubProvider>
			<App />
		</GithubProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
