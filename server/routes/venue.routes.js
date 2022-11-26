const VenueController = require("../controllers/venue.controllers"),
	{ authenticate } = require("../config/jwt.config");

module.exports = (app) => {
	app.post("api/venues/register/", VenueController.register);
	app.post("api/venues/login", VenueController.login);
	app.get("api/venues/logout", authenticate, VenueController.logout);

	app.get("api/venues/all", authenticate, VenueController.get_all);
	app.get("api/venues/:id", authenticate, VenueController.show_one);
	app.put("api/venues/edit/:id", authenticate, VenueController.update);
	app.put("api/venues/delete/:id", authenticate, VenueController.destroy);
};
