const VenueController = require("../controllers/venue.controllers"),
	{ authenticate } = require("../config/jwt.config");

module.exports = (app) => {
	app.post("/venues/register/", VenueController.register);
	app.post("/venues/login", VenueController.login);
	app.get("/venues/logout", authenticate, VenueController.logout);

	app.get("/venues/all", authenticate, VenueController.get_all);
	app.get("/venues/:id", authenticate, VenueController.show);
	app.put("/venues/update/:id", authenticate, VenueController.update);
	app.put("/venues/destroy/:id", authenticate, VenueController.update);
};
