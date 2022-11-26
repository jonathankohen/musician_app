const MusicianController = require("../controllers/musician.controllers"),
	{ authenticate } = require("../config/jwt.config");

module.exports = (app) => {
	app.post("api/musicians/register/", MusicianController.register);
	app.post("api/musicians/login", MusicianController.login);
	app.get("api/musicians/logout", authenticate, MusicianController.logout);

	app.get("api/musicians/all", authenticate, MusicianController.get_all);
	app.get("api/musicians/:id", authenticate, MusicianController.show_one);
	app.put("api/musicians/edit/:id", authenticate, MusicianController.update);
	app.put(
		"api/musicians/delete/:id",
		authenticate,
		MusicianController.destroy,
	);
};
