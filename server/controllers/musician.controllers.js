const { Musician } = require("../models/musician.models");

module.exports = {
	get_all: (req, res) => {
		Musician.find()
			.then((data) => res.json({ results: data }))
			.catch((err) => res.json(err.errors));
	},

	create: (req, res) => {
		Musician.create(req.body)
			.then((data) => res.json({ results: data }))
			.catch((err) => console.log(err));
	},

	show: (req, res) => {
		Musician.findOne({ _id: req.params.id })
			.then((data) => res.json({ results: data }))
			.catch((err) => res.json(err.errors));
	},

	update: (req, res) => {
		Musician.findOneAndUpdate({ _id: req.params.id }, req.body, {
			useFindAndModify: false,
			runValidators: true,
			new: true,
		})
			.then((data) => res.json({ results: data }))
			.catch((err) => res.json(err.errors));
	},

	destroy: (req, res) => {
		Musician.deleteOne({ _id: req.params.id })
			.then((data) => res.json({ results: data }))
			.catch((err) => res.json(err.errors));
	},
};
