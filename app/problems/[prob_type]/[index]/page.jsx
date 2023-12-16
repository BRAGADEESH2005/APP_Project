// pages/problems/[problem_type]/[index].js
"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import "../../../../styles/codePage.css"

const ProblemDetailPage = ({ params }) => {
	const { prob_type, index } = params;
	const [problem, setProblem] = useState({});
	const [loading, setLoading] = useState(true);
	const [codeInput, setCodeInput] = useState(''); // State to store the code input

	const handleCodeChange = (e) => {
		setCodeInput(e.target.value);
	  };
	
	  const handleSubmit = async () => {
		try {
		  // You can send the codeInput to the server for further processing
		  // For example, make another API request to submit the code
		  const submissionResponse = await axios.post(
			`http://localhost:3000/api/submit-code/${prob_type}/${index}`,
			{
			  prob_type: prob_type,
			  index: index,
			  code: codeInput,
			}
		  );
	
		  console.log("Submission Response:", submissionResponse.data);
	
		  // Handle the response as needed
	
		} catch (error) {
		  // Handle errors
		  console.error("Error:", error);
		}
	  };

	useEffect(() => {
		// Use an asynchronous function to be able to use await
		const fetchData = async () => {
			try {
				const response = await axios.post(
					`http://localhost:3000/api/problem/${prob_type}/${index}`,
					{
						prob_type: prob_type,
						index: index,
					}
				);

				// Handle the response if needed
				console.log("Response:", response.data);
				setProblem(response.data.data);
				setLoading(false);
			} catch (error) {
				// Handle errors
				console.error("Error:", error);
			}
		};

		fetchData();
	}, [prob_type, index]);

	return (
		<div className="code-page">
			<div className="problem-stat">
				<p className="pheading">{problem.heading}</p>
				<p className="hdesc">Description:</p>
				<p className="pdescription">{problem.description}</p>
				<p className="hdesc">Constraint:</p>
				<p className="pconstraints">{problem.constraints}</p>
			</div>
			<div className="code-stat">
				<textarea
					rows="31"
					cols="80"
					value={codeInput}
					onChange={handleCodeChange}
					placeholder="Enter your code here"
				></textarea>

				{/* Submit button */}
				<button className="submitbtn" onClick={handleSubmit}>Submit Code</button>
			</div>
		</div>
	);
};

export default ProblemDetailPage;
