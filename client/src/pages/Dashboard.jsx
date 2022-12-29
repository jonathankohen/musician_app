import React, { useState, useEffect } from "react";

// Routing
import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:8000/api/",
});

export default function Dashboard({ userEmail }) {
	const [user, setUser] = useState({});

	useEffect(() => {
		api.get("users/get_by_email", userEmail, {
			withCredentials: true,
		})
			.then((res) => setUser(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			<header>
				<h1>Dashboard</h1>
			</header>

			{user.type === "musician" ? <h2>Musician</h2> : <h2>Venue</h2>}
		</>
	);
}
