import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
	return (
		<>
			<h1>Are you a musician, or venue?</h1>
			<Link to="/musicians/register">Musician</Link>{" "}
			<Link to="/venues/register">Venue</Link>
		</>
	);
}
