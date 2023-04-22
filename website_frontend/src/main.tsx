import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
