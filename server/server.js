require("dotenv").config();

const express = require("express"),
	app = express(),
	cors = require("cors"),
	cookieParser = require("cookie-parser"),
	// bodyParser = require("body-parser"),
	port = process.env.PORT,
	server = app.listen(port, () =>
		console.log(`Listening to: http://localhost:${port}`),
	);

app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/database.config");
require("./routes/musician.routes")(app);
require("./routes/venue.routes")(app);
