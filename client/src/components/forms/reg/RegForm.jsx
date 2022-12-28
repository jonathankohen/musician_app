import React from "react";

// App Components
import RegMusicianForm from "./RegMusicianForm";
import RegVenueForm from "./RegVenueForm";

export default function RegForm({ user_type }) {
	return (
		<>{user_type === "musician" ? <RegMusicianForm /> : <RegVenueForm />}</>
	);
}
