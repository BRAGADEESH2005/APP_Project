import User from "../../../models/user";
import { connectToDB } from "../../../utils/database";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        await connectToDB()
            .then(() => console.log("Connected to MongoDB"))
            .catch((err) => console.log(err));

         const LeaderBoard = await User.find({})
            .select('username score _id') // Select only username, score, and id
            .sort({ score: -1 });

        console.log("LeaderBoard", LeaderBoard);
        return NextResponse.json({ success: true, data: LeaderBoard },{status:200});
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message },{status:500});
    }
}