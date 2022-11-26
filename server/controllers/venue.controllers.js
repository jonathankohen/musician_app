const { Venue } = require('../models/venue.models');

module.exports = {
	register: (req, res) => {
		Venue.create(req.body)
			.then((venue) => {
				res.cookie('user_token', jwt.sign({ _id: venue._id }, process.env.SECRET_KEY), {
					httpOnly: true,
				}).json({
					msg: 'Success!',
					venue: {
						name: venue.name,
						email: venue.email,
						password: venue.password,
						city: venue.city,
						state: venue.state,
						zip: venue.zip,
						bio: venue.bio,
					},
				});
			})
			.catch((err) => res.json(err.errors));
	},

	login: (req, res) => {
		Venue.findOne({ email: req.body.email })
			.then((venue) => {
				if (venue == null) {
					res.status(400).json({ msg: 'Invalid login attempt.' });
					res.cookie();
				} else {
					bcrypt
						.compare(req.body.password, user.password)
						.then((isValid) => {
							if (isValid === true) {
								res.cookie('user_token', jwt.sign({ _id: venue._id }, process.env.SECRET_KEY), {
									httpOnly: true,
								}).json({
									msg: 'success!',
									venue: {
										id: venue._id,
										name: venue.name,
										email: venue.email,
										password: venue.password,
										city: venue.city,
										state: venue.state,
										zip: venue.zip,
										bio: venue.bio,
									},
								});
							} else {
								res.status(400).json({
									msg: 'Invalid login attempt!',
								});
							}
						})
						.catch((err) => {
							console.log(err);
							res.status(400).json({
								msg: 'Invalid login attempt!',
							});
						});
				}
			})
			.catch((err) => res.status(400).json(err.errors));
	},

	logout: (req, res) => {
		res.clearCookie('user_token');
		res.sendStatus(200);
	},

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
