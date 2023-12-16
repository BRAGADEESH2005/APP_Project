"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../styles/problem.css";
import Link from "next/link";

const Problems = () => {
	const [problems, setProblems] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		axios
			.get("http://localhost:3000/api/problem")
			.then((res) => {
				console.log("rESS", res);
				console.log("rESS22", res.data.data);
				setProblems(res.data.data);
				console.log("Problems:", problems);
				setLoading(false);
			})
			.catch((err) => console.log("eRR:", err));
	}, []);
	return loading ? (
		<div>Loading...</div>
	) : (
		<div>
			{problems.map((problem,index) => {
				return (
					<div key={index}>
						<div className="prob-type">{problem.problem_type}</div>
						{problem.problem.map((prob,index) => {
							return (
								<Link href={`/problems/${problem.problem_type}/${index}`}  className="prob-stat" key={index}>
									{index+1}. {prob.heading}
									{/* You can display other properties of prob here */}
								</Link>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};

export default Problems;
