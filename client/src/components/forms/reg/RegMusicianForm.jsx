import React, { useState } from "react";

// React-Bootstrap Components
import Button from "react-bootstrap/Button";
import BSForm from "react-bootstrap/Form";

// Variables
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

export default function RegMusicianForm() {
	const [reg, setReg] = useState(initial_musician);

	const [errors, setErrors] = useState(initial_musician);

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
		<BSForm>
			<BSForm.Group className="mb-3" controlId="first_name">
				<BSForm.Label>First name</BSForm.Label>
				<BSForm.Control type="text" placeholder="First name" />
			</BSForm.Group>

			<BSForm.Group className="mb-3" controlId="last_name">
				<BSForm.Label>Last name</BSForm.Label>
				<BSForm.Control type="text" placeholder="Last name" />
			</BSForm.Group>

			<BSForm.Group className="mb-3" controlId="email">
				<BSForm.Label>Email address</BSForm.Label>
				<BSForm.Control type="email" placeholder="Enter email" />
				<BSForm.Text className="text-muted">
					We'll never share your email with anyone else.
				</BSForm.Text>
			</BSForm.Group>

			<BSForm.Group className="mb-3" controlId="password">
				<BSForm.Label>Password</BSForm.Label>
				<BSForm.Control type="password" placeholder="Password" />
			</BSForm.Group>

			<BSForm.Group className="mb-3" controlId="c_password">
				<BSForm.Label>Password</BSForm.Label>
				<BSForm.Control type="password" placeholder="Password" />
			</BSForm.Group>

			{/* <BSForm.Group className="mb-3" controlId="BSFormBasicCheckbox">
				<BSForm.Check type="checkbox" label="Check me out" />
			</BSForm.Group> */}
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</BSForm>
	);
}
