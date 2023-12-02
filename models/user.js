import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
	username: {
		type: String,
		required: [true, "Please enter your username"],
		trim: true,
		maxlength: 32,
	},
	email: {
		type: String,
		required: [true, "Please enter your email"],
		trim: true,
		maxlength: 32,
		unique: [true, "Email already exists"],
	},
	image: {
		type: String,
	},
});

const User = models.User || model("User", userSchema);
export default User;
