import React from "react";

// React-Bootstrap Components
import Button from "react-bootstrap/Button";
import BSForm from "react-bootstrap/Form";

// App Components
import FormError from "../../FormError";

// Utils
import usStates from "../../../utils/usStates.json";

export default function RegForm({
	userType,
	handleInputChange,
	handleSubmit,
	errors,
	reg,
}) {
	return (
		<BSForm onSubmit={handleSubmit} className="my-5">
			{userType === "venue" ? (
				<>
					<BSForm.Group className="mb-3" controlId="name">
						<BSForm.Label>Venue name</BSForm.Label>
						<BSForm.Control
							type="text"
							name="name"
							placeholder="Venue name"
							onChange={handleInputChange}
						/>
						<FormError errors={errors} varName="name" />
					</BSForm.Group>
				</>
			) : (
				<>
					<BSForm.Group className="mb-3" controlId="firstName">
						<BSForm.Label>First name</BSForm.Label>
						<BSForm.Control
							type="text"
							name="firstName"
							placeholder="First name"
							onChange={handleInputChange}
						/>
						<FormError errors={errors} varName="firstName" />
					</BSForm.Group>

					<BSForm.Group className="mb-3" controlId="lastName">
						<BSForm.Label>Last name</BSForm.Label>
						<BSForm.Control
							type="text"
							name="lastName"
							placeholder="Last name"
							onChange={handleInputChange}
						/>
						<FormError errors={errors} varName="lastName" />
					</BSForm.Group>
				</>
			)}

			<BSForm.Group className="mb-3" controlId="email">
				<BSForm.Label>Email address</BSForm.Label>
				<BSForm.Control
					type="email"
					name="email"
					placeholder="Enter email"
					onChange={handleInputChange}
				/>
				<BSForm.Text className="text-muted">
					We'll never share your email with anyone else.
				</BSForm.Text>
				<FormError errors={errors} varName="email" />
			</BSForm.Group>

			<BSForm.Group className="mb-3" controlId="password">
				<BSForm.Label>Password</BSForm.Label>
				<BSForm.Control
					type="password"
					name="password"
					placeholder="Password"
					onChange={handleInputChange}
				/>
				<FormError errors={errors} varName="password" />
			</BSForm.Group>

			<BSForm.Group className="mb-3" controlId="confirmPassword">
				<BSForm.Label>Confirm Password</BSForm.Label>
				<BSForm.Control
					type="password"
					name="confirmPassword"
					placeholder="Confirm Password"
					onChange={handleInputChange}
				/>
				<FormError errors={errors} varName="confirmPassword" />
			</BSForm.Group>

			{userType === "venue" ? (
				<>
					<BSForm.Group className="mb-3" controlId="addressLineOne">
						<BSForm.Label>Address Line 1</BSForm.Label>
						<BSForm.Control
							type="text"
							name="addressLineOne"
							placeholder="Address Line 1"
							onChange={handleInputChange}
						/>
						<FormError errors={errors} varName="addressLineOne" />
					</BSForm.Group>

					<BSForm.Group className="mb-3" controlId="addressLineTwo">
						<BSForm.Label>Address Line 2</BSForm.Label>
						<BSForm.Control
							type="text"
							name="addressLineTwo"
							placeholder="Address Line 2"
							onChange={handleInputChange}
						/>
						<FormError errors={errors} varName="addressLineTwo" />
					</BSForm.Group>
				</>
			) : null}

			<BSForm.Group className="mb-3" controlId="city">
				<BSForm.Label>City</BSForm.Label>
				<BSForm.Control
					type="text"
					name="city"
					placeholder="City"
					onChange={handleInputChange}
				/>
				<FormError errors={errors} varName="city" />
			</BSForm.Group>

			<BSForm.Group className="mb-3" controlId="state">
				<BSForm.Label>State</BSForm.Label>

				<BSForm.Select aria-label="Please select a state">
					<option>Please select a state</option>
					{usStates.map((state, index) => {
						return (
							<option key={index} value={state["abbreviation"]}>
								{state["name"]}
							</option>
						);
					})}
				</BSForm.Select>
				<FormError errors={errors} varName="state" />
			</BSForm.Group>

			<BSForm.Group className="mb-3" controlId="zip">
				<BSForm.Label>Zip Code</BSForm.Label>
				<BSForm.Control
					type="text"
					name="zip"
					placeholder="Zip Code"
					onChange={handleInputChange}
					maxLength="5"
				/>
				<FormError errors={errors} varName="zip" />
			</BSForm.Group>

			<BSForm.Group className="mb-3" controlId="bio">
				<BSForm.Label>Bio</BSForm.Label>
				<BSForm.Control
					as="textarea"
					rows={3}
					name="bio"
					placeholder="Bio"
					onChange={handleInputChange}
				/>
				<FormError errors={errors} varName="bio" />
			</BSForm.Group>

			<Button variant="primary" type="submit">
				Submit
			</Button>
		</BSForm>
	);
}
