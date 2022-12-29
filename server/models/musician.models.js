const mongoose = require("mongoose"),
	bcrypt = require("bcrypt");

const MusicianSchema = new mongoose.Schema(
	{
		type: {
			type: String,
			default: "musician",
		},

		firstName: {
			type: String,
			required: [true, "First name is required."],
			trim: true,
		},

		lastName: {
			type: String,
			required: [true, "Last name is required."],
			trim: true,
		},

		email: {
			type: String,
			required: [true, "Email is required."],
			validate: {
				validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
				message: "Please enter a valid email.",
			},
		},

		password: {
			type: String,
			required: [true, "Password is required."],
			minlength: [8, "Password must be eight characters or longer."],
		},

		city: {
			type: String,
			required: [true, "City is required."],
			trim: true,
		},

		state: {
			type: String,
			required: [true, "Please select a state from the dropdown."],
		},

		zip: {
			type: String,
			required: [true, "Please enter your zip code."],
			minlength: [5, "Invalid zip code."],
		},

		bio: {
			type: String,
			required: [true, "Bio is required."],
			maxlength: [3000, "Too long."],
		},

		instrument: {
			type: Array,
			required: [true, "Primary Instrument is required."],
		},

		streamingLink: {
			type: String,
		},

		likes: [],

		dislikes: [],

		likedBy: [],

		matches: [],
	},

	{ timestamps: true },
);

MusicianSchema.virtual("confirmPassword")
	.get(() => this._confirmPassword)
	.set((value) => (this._confirmPassword = value));

MusicianSchema.pre("validate", function (next) {
	if (this.password !== this.confirmPassword) {
		this.invalidate("confirmPassword", "Passwords must match.");
	}
	next();
});

MusicianSchema.pre("save", function (next) {
	bcrypt.hash(this.password, 10).then((hash) => {
		this.password = hash;
		next();
	});
});

const Musician = mongoose.model("Musician", MusicianSchema);

module.exports.Musician = Musician;
