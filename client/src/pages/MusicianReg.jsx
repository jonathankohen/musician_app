import React from "react";

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

export default function MusicianReg({
	user_type,
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
