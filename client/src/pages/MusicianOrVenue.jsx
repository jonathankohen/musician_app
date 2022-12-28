import React from "react";

// Routing
import { Link } from "react-router-dom";

// React Bootstrap Components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MusicianOrVenue() {
	return (
		<>
			<header>
				<h1>Are you a:</h1>
			</header>

			<Row>
				<Col>
					<Link to="/musicians/register">Musician</Link>
				</Col>
				<Col>
					<p> or a </p>
				</Col>
				<Col>
					<Link to="/venues/register">Venue?</Link>
				</Col>
			</Row>
		</>
	);
}
