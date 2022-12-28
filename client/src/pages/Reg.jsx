import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Components
import Form from "../components/Form";

const initial_musician = {
	first_name: "",
	last_name: "",
	email: "",
	password: "",
	confirm_password: "",
	city: "",
	state: "",
	bio: "",
	genre: "",
	instruments: [],
	streaming_link: "",
	website: "",
};

const initial_venue = {
	name: "",
	email: "",
	password: "",
	confirm_password: "",
	address_line_1: "",
	address_line_2: "",
	city: "",
	state: "",
	bio: "",
	capacity: "",
	age_limit: "",
	website: "",
};

export default function Reg({ user_type }) {
	const [reg, setReg] = useState(
		user_type === "musician" ? initial_musician : initial_venue,
	);

	const [errors, setErrors] = useState(
		user_type === "musician" ? initial_musician : initial_venue,
	);

	const handleInputChange = (e) => {
		setReg({
			...reg,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post(`http://localhost:8000/api/${user_type}s/register`, reg, {
				withCredentials: true,
			})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	return (
		<>
			<header>
				<h1>Are you a musician, or venue?</h1>
				<Link to="/musicians/register">Musician</Link>{" "}
				<Link to="/venues/register">Venue</Link>
			</header>
		</>
	);
}
