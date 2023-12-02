require("dotenv").config();
import mongoose from "mongoose";
let isConnected = false;

export const connectToDB = async () => {
	mongoose.set("strictQuery", true);
	if (isConnected) {
		console.log("=> using existing database connection");
		return;
	}
	try {
		console.log("Mongooo", process.env.MONGODB_URI);
		const db = await mongoose.connect(process.env.MONGODB_URI, {
			dbName: "CodeMonk",
		});
		isConnected = true;
		console.log("=> using new database connection");
	} catch (error) {
		console.log("=> error while connecting with database", error);
	}
};
