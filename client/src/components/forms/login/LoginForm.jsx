import React, { useState, useHistory } from "react";

// Routing
import axios from "axios";

// React-Bootstrap Components
import Button from "react-bootstrap/Button";
import BSForm from "react-bootstrap/Form";

const initialLogin = {
	email: "",
	password: "",
};

export default function LoginForm() {
	const [login, setLogin] = useState(initialLogin);
	const [errors] = useState(initialLogin);
	const history = useHistory();

	const handleInputChange = (e) => {
		setLogin({
			...login,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:8000/api/musicians/login", login, {
				withCredentials: true,
			})
			.then((res) => {
				if (res.data.user) {
					setUser(res.data.user);
					history.push("/users");
				} else {
					console.log(res.data);
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<BSForm onSubmit={handleSubmit}>
			<BSForm.Group className="mb-3" controlId="BSFormBasicEmail">
				<BSForm.Label>Email address</BSForm.Label>
				<BSForm.Control
					type="email"
					placeholder="Enter email"
					onChange={handleInputChange}
					value={login.email}
				/>
				<BSForm.Text className="text-muted">
					We'll never share your email with anyone else.
				</BSForm.Text>
			</BSForm.Group>

			<BSForm.Group className="mb-3" controlId="BSFormBasicPassword">
				<BSForm.Label>Password</BSForm.Label>
				<BSForm.Control
					type="password"
					placeholder="Password"
					onChange={handleInputChange}
					value={login.password}
				/>
			</BSForm.Group>

			<Button variant="primary" type="submit">
				Submit
			</Button>
		</BSForm>
	);
}
