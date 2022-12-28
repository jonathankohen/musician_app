import React from "react";

// Routing
import { Link } from "react-router-dom";

export default function Login() {
	return (
		<>
			<header>
				<h1>Sign-In</h1>
			</header>

			<p>
				<Link to="musician_or_venue">Create account?</Link>
			</p>
		</>
	);
}
