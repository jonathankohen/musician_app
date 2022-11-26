import * as React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage";
import Reg from "./pages/Reg";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

// Components
import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container/Container";
import NoMatch from "./components/NoMatch";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Container>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route
						path="musicians/register"
						element={<Reg user_type="musician" />}
					/>
					<Route
						path="musicians/login"
						element={<Login user_type="musician" />}
					/>
					<Route
						path="musicians/dashboard"
						element={<Dashboard user_type="musician" />}
					/>
					<Route
						path="venues/register"
						element={<Reg user_type="venue" />}
					/>
					<Route
						path="venues/login"
						element={<Login user_type="venue" />}
					/>
					<Route
						path="venues/dashboard"
						element={<Dashboard user_type="venue" />}
					/>
					<Route path="*" element={<NoMatch />} />
				</Routes>
			</Container>
		</div>
	);
}

export default App;
