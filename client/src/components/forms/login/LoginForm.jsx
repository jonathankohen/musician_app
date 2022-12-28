import React from "react";

// React-Bootstrap Components
import Button from "react-bootstrap/Button";
import BSForm from "react-bootstrap/Form";

export default function LoginForm() {
	return (
		<BSForm>
			<BSForm.Group className="mb-3" controlId="BSFormBasicEmail">
				<BSForm.Label>Email address</BSForm.Label>
				<BSForm.Control type="email" placeholder="Enter email" />
				<BSForm.Text className="text-muted">
					We'll never share your email with anyone else.
				</BSForm.Text>
			</BSForm.Group>

			<BSForm.Group className="mb-3" controlId="BSFormBasicPassword">
				<BSForm.Label>Password</BSForm.Label>
				<BSForm.Control type="password" placeholder="Password" />
			</BSForm.Group>
			<BSForm.Group className="mb-3" controlId="BSFormBasicCheckbox">
				<BSForm.Check type="checkbox" label="Check me out" />
			</BSForm.Group>
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</BSForm>
	);
}
