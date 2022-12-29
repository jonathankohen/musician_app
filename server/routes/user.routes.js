const UserController = require("../controllers/user.controllers"),
	{ authenticate } = require("../config/jwt.config");

module.exports = (app) => {
	app.get(
		"/api/users/get_by_email",
		authenticate,
		UserController.get_by_email,
	);
};
