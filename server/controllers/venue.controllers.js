const { Venue } = require("../models/venue.models");

module.exports = {
	get_all: (req, res) => {
		Venue.find()
			.then((data) => res.json({ results: data }))
			.catch((err) => res.json(err.errors));
	},

	create: (req, res) => {
		Venue.create(req.body)
			.then((data) => res.json({ results: data }))
			.catch((err) => console.log(err));
	},

	show: (req, res) => {
		Venue.findOne({ _id: req.params.id })
			.then((data) => res.json({ results: data }))
			.catch((err) => res.json(err.errors));
	},

	update: (req, res) => {
		Venue.findOneAndUpdate({ _id: req.params.id }, req.body, {
			useFindAndModify: false,
			runValidators: true,
			new: true,
		})
			.then((data) => res.json({ results: data }))
			.catch((err) => res.json(err.errors));
	},

	destroy: (req, res) => {
		Venue.deleteOne({ _id: req.params.id })
			.then((data) => res.json({ results: data }))
			.catch((err) => res.json(err.errors));
	},
};
