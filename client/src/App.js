import * as React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Reg from "./pages/Reg";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

// Components
import Navbar from "./components/layout/Navbar/Navbar";
import Container from "./components/layout/Container/Container.jsx";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Container>
				<Routes>
					<Route path="/" element={<Reg />} />
					<Route path="/login" element={<Login />} />
					<Route path="/dashboard" element={<Dashboard />} />

					{/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
					{/* <Route path="*" element={<NoMatch />} /> */}

					{/* <Route path="/about">
						<About />
					</Route>
					<Route path="/user/:id">
						<Show />
					</Route>
					<Route path="/edit/:id">
						<Edit user={user} />
					</Route> */}
					{/* <Footer /> */}
				</Routes>
			</Container>
		</div>
	);
}

export default App;
