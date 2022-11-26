const LoginRegController = require("../controllers/loginReg.controller"),
	{ authenticate } = require("../config/jwt.config");

module.exports = (app) => {
	app.post("/api/register", LoginRegController.register);
	app.post("/api/login", LoginRegController.login);
	app.get("/api/logout", authenticate, LoginRegController.logout);
};
