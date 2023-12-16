import Problem from "../../../../../models/problem";
import { connectToDB } from "../../../../../utils/database";
import { NextResponse } from "next/server";

export async function POST(req, res) {
	try {
		const data = await req.json();
		await connectToDB()
			.then(() => console.log("Connected to MongoDB"))
			.catch((err) => console.log(err));
		console.log("Request in prontype----:", data);
		const { prob_type, index } = data;
		const result = await Problem.findOne({
			problem_type: prob_type,
		});
		const problem = result.problem[index];
		console.log("Prob", problem);
		return NextResponse.json({ success: true, data: problem }, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ success: false, message: error.message },
			{ status: 500 }
		);
	}
}
