import React from "react";

// React Bootstrap Components
import Image from "react-bootstrap/Image";

// Images
import error_kitten from "../../../images/error_kitten.png";

// Module Styles
import styles from "./NoMatch.module.css";

export default function NoMatch() {
	return (
		<header>
			<h1>Uh oh.</h1>
			<p>Sorry, looks like something went wrong.</p>
			<p>Here's a kitten.</p>
			<Image src={error_kitten} className={styles["kitten-img"]} />
		</header>
	);
}
