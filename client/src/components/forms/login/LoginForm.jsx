import React from "react";

// React-Bootstrap Components
import Button from "react-bootstrap/Button";
import BSForm from "react-bootstrap/Form";

// App Components
import FormError from "../FormError";

export default function LoginForm({ handleInputChange, handleSubmit, errors }) {
	return (
		<BSForm onSubmit={handleSubmit}>
			<BSForm.Group className="mb-3" controlId="BSFormBasicEmail">
				<BSForm.Label>Email address</BSForm.Label>
				<BSForm.Control
					type="email"
					placeholder="Enter email"
					onChange={handleInputChange}
				/>
				<BSForm.Text className="text-muted">
					We'll never share your email with anyone else.
				</BSForm.Text>
				<FormError errors={errors} varName="email" />
			</BSForm.Group>

			<BSForm.Group className="mb-3" controlId="BSFormBasicPassword">
				<BSForm.Label>Password</BSForm.Label>
				<BSForm.Control
					type="password"
					placeholder="Password"
					onChange={handleInputChange}
				/>
				<FormError errors={errors} varName="password" />
			</BSForm.Group>

			<Button variant="primary" type="submit">
				Submit
			</Button>
		</BSForm>
	);
}
