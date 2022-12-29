import React, { useState } from "react";

// Routing
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

// App Components
import LoginForm from "../components/forms/login/LoginForm";

const initialLogin = {
	email: "",
	password: "",
};

export default function Login() {
	const [login, setLogin] = useState(initialLogin);
	const [errors, setErrors] = useState(initialLogin);
	const navigate = useNavigate();

	const goToDash = () => {
		navigate("/dashboard");
	};

	const handleInputChange = (e) => {
		setLogin({
			...login,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(initialLogin);

		axios
			.post("http://localhost:8000/api/musicians/login", login, {
				withCredentials: true,
			})
			.then((res) => {
				if (res.data) {
					goToDash();
				} else {
					setErrors(res.data);
				}
			})
			.catch((err) => console.log(err));
	};
	return (
		<>
			<header>
				<h1>Sign-In</h1>
			</header>

			<LoginForm
				handleInputChange={handleInputChange}
				handleSubmit={handleSubmit}
				errors={errors}
			/>

			<p>
				<Link to="musician_or_venue">Create account?</Link>
			</p>
		</>
	);
}
