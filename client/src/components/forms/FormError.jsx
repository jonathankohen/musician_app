import React from "react";

export default function FormError({ errors, varName }) {
	return (
		<p>
			<span className="text-danger">
				{errors[varName] ? errors[varName]["message"] : ""}
			</span>
		</p>
	);
}
