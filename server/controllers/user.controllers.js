const { Musician } = require("../models/musician.models");
const { Venue } = require("../models/venue.models");

module.exports = {
	get_by_email: (req, res) => {
		Musician.findOne({ email: req.params.email })
			.then((data) => res.json({ results: data }))
			.catch((err) => {
				res.json(err.errors);

				Venue.findOne({ email: req.params.email })
					.then((data) => res.json({ results: data }))
					.catch((err) => {
						res.json(err.errors);
					});
			});
	},
};
