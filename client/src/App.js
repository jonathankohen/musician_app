import * as React from "react";
import { Routes, Route } from "react-router-dom";

// App Pages
import Reg from "./pages/Reg";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MusicianOrVenue from "./pages/MusicianOrVenue";

// App Components
import Navbar from "./components/layout/Navbar/Navbar";
import Container from "./components/layout/Container/Container";
import NoMatch from "./components/utils/NoMatch/NoMatch";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Container>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route
						path="musician_or_venue"
						element={<MusicianOrVenue />}
					/>
					<Route
						path="musicians/register"
						element={<Reg userType="musician" />}
					/>
					<Route
						path="musicians/login"
						element={<Login userType="musician" />}
					/>
					<Route path="dashboard" element={<Dashboard />} />
					<Route
						path="venues/register"
						element={<Reg userType="venue" />}
					/>
					<Route
						path="venues/login"
						element={<Login userType="venue" />}
					/>
					<Route
						path="venues/dashboard"
						element={<Dashboard userType="venue" />}
					/>
					<Route path="*" element={<NoMatch />} />
				</Routes>
			</Container>
		</div>
	);
}

export default App;
