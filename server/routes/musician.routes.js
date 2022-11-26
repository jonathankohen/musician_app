const MusicianController = require("../controllers/musician.controllers"),
	{ authenticate } = require("../config/jwt.config");

module.exports = (app) => {
	app.post("/musician/register/", LoginRegController.register);
	app.post("/musician/login", LoginRegController.login);
	app.get("/musician/logout", authenticate, LoginRegController.logout);

	app.get("/musician/all", authenticate, MusicianController.get_all);
	app.get("/musician/:id", authenticate, MusicianController.show);
	app.put("/musician/update/:id", authenticate, MusicianController.update);
};
