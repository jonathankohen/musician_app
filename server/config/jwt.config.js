const jwt = require("jsonwebtoken");

module.exports.authenticate = (req, res, next) => {
	jwt.verify(
		req.cookies.usertoken,
		process.env.SECRET_KEY,
		(err, payload) => {
			console.log("These are cookies", req.cookies);
			if (err) {
				console.log(err);
				res.status(401).json({ verified: false });
			} else {
				next();
			}
		},
	);
};
