import React from "react";

// Components
import Form from "../components/Form";

const initial_musician = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	confirmPassword: "",
	city: "",
	state: "",
	bio: "",
	genre: "",
	instruments: [],
	streamingLink: "",
	website: "",
};

export default function MusicianReg({
	userType,
	errors,
	setErrors,
	handleInputChange,
	handleSubmit,
}) {
	return (
		<Form
			initial_user={initial_musician}
			handleInputChange={handleInputChange}
			handleSubmit={handleSubmit}
		/>
	);
}
