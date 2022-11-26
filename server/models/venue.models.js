const mongoose = require("mongoose"),
	bcrypt = require("bcrypt");

const VenueSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "First name is required."],
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

		address_line_1: {
			type: String,
			required: [true, "Address line 1 required."],
		},

		address_line_2: {
			type: String,
		},

		city: {
			type: String,
			required: [true, "City is required."],
		},

		state: {
			type: String,
			required: [true, "Please select a state from the dropdown."],
		},

		zip: {
			type: String,
			required: [true, "Please enter your zip code."],
			minlength: [5, "Invalid zip code."],
			maxlength: [10, "Invalid zip code."],
		},

		bio: {
			type: String,
			required: [true, "Bio is required."],
			maxlength: [3000, "Too long."],
		},
	},
	{ timestamps: true },
);

VenueSchema.virtual("confirmPassword")
	.get(() => this._confirmPassword)
	.set((value) => (this._confirmPassword = value));

VenueSchema.pre("validate", function (next) {
	if (this.password !== this.confirmPassword) {
		this.invalidate(
			"confirmPassword",
			"Password must match confirm password",
		);
	}
	next();
});

VenueSchema.pre("save", function (next) {
	bcrypt.hash(this.password, 10).then((hash) => {
		this.password = hash;
		next();
	});
});

const Venue = mongoose.model("Venue", VenueSchema);

module.exports.Venue = Venue;
