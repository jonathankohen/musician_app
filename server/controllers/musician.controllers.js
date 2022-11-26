const { Musician } = require("../models/musician.models"),
	bcrypt = require("bcrypt"),
	jwt = require("jsonwebtoken");

module.exports = {
	register: (req, res) => {
		Musician.create(req.body)
			.then((musician) => {
				res.cookie(
					"user_token",
					jwt.sign({ _id: musician._id }, process.env.SECRET_KEY),
					{
						httpOnly: true,
					},
				).json({
					msg: "Success!",
					musician: {
						first_name: musician.first_name,
						last_name: musician.last_name,
						email: musician.email,
						password: musician.password,
						city: musician.city,
						state: musician.state,
						zip: musician.zip,
						bio: musician.bio,
						instrument: musician.instrument,
						streaming_link: musician.streaming_link,
						likes: musician.likes,
						dislikes: musician.dislikes,
						liked_by: musician.liked_by,
						matches: musician.matches,
					},
				});
			})
			.catch((err) => res.json(err.errors));
	},

	login: (req, res) => {
		Musician.findOne({ email: req.body.email })
			.then((musician) => {
				if (musician == null) {
					res.status(400).json({ msg: "Invalid login attempt." });
					res.cookie();
				} else {
					bcrypt
						.compare(req.body.password, user.password)
						.then((isValid) => {
							if (isValid === true) {
								res.cookie(
									"user_token",
									jwt.sign(
										{ _id: musician._id },
										process.env.SECRET_KEY,
									),
									{
										httpOnly: true,
									},
								).json({
									msg: "success!",
									musician: {
										id: musician._id,
										first_name: musician.first_name,
										last_name: musician.last_name,
										email: musician.email,
										password: musician.password,
										city: musician.city,
										state: musician.state,
										zip: musician.zip,
										bio: musician.bio,
										instrument: musician.instrument,
										streaming_link: musician.streaming_link,
										likes: musician.likes,
										dislikes: musician.dislikes,
										liked_by: musician.liked_by,
										matches: musician.matches,
									},
								});
							} else {
								res.status(400).json({
									msg: "Invalid login attempt!",
								});
							}
						})
						.catch((err) => {
							console.log(err);
							res.status(400).json({
								msg: "Invalid login attempt!",
							});
						});
				}
			})
			.catch((err) => res.status(400).json(err.errors));
	},

	logout: (req, res) => {
		res.clearCookie("user_token");
		res.sendStatus(200);
	},

	create: (req, res) => {
		Musician.create(req.body)
			.then((data) => res.json({ results: data }))
			.catch((err) => console.log(err.errors));
	},

	get_all: (req, res) => {
		Musician.find()
			.then((data) => res.json({ results: data }))
			.catch((err) => res.json(err.errors));
	},

	show_one: (req, res) => {
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
