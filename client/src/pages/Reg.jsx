import React, { useState } from "react";

// Routing
import axios from "axios";
import { useNavigate } from "react-router-dom";

// App Components
import RegForm from "../components/forms/reg/RegForm/RegForm";

const initialMusician = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	confirmPassword: "",
	city: "",
	state: "",
	zip: "",
	bio: "",
	genre: "",
	instruments: [],
	streamingLink: "",
	website: "",
	likes: [],
	dislikes: [],
	likedBy: [],
	matches: [],
};

const initialVenue = {
	name: "",
	email: "",
	password: "",
	confirmPassword: "",
	addressLineOne: "",
	addressLineTwo: "",
	city: "",
	state: "",
	bio: "",
	capacity: "",
	age_limit: "",
	website: "",
};

export default function Reg({ userType }) {
	const getInitial = () => {
		if (userType === "musician") {
			return initialMusician;
		} else if (userType === "venue") {
			return initialVenue;
		} else {
			return false;
		}
	};

	const [reg, setReg] = useState(getInitial(userType));
	const [errors, setErrors] = useState(getInitial(userType));
	const navigate = useNavigate();

	const goToDash = (uType) => {
		navigate(`/${uType}s/dashboard`);
	};

	const handleInputChange = (e) => {
		setReg({
			...reg,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		setErrors(getInitial());
		e.preventDefault();

		axios
			.post(`http://localhost:8000/api/${userType}s/register`, reg, {
				withCredentials: true,
			})
			.then((res) => {
				if (res.data) {
					goToDash(userType);
				} else {
					setErrors(res.data);
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<header>
				<h1>Sign Up</h1>
			</header>

			<RegForm
				userType={userType}
				handleInputChange={handleInputChange}
				handleSubmit={handleSubmit}
				errors={errors}
				reg={reg}
			/>
		</>
	);
}
