import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";

const RoutePages = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
};

export default RoutePages;
