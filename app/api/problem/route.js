import Problem from "../../../models/problem";
import { connectToDB } from "../../../utils/database";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        await connectToDB()
            .then(() => console.log("Connected to MongoDB"))
            .catch((err) => console.log(err));

        const problems = await Problem.find({});
        return NextResponse.json({ success: true, data: problems },{status:200});
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message },{status:500});
    }
}