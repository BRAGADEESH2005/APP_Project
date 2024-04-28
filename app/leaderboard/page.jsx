"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../styles/problem.css";
import Link from "next/link";

const LeaderBoard = () => {
	const [LeaderBoard, setLeaderBoard] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		axios
			.get("http://localhost:3000/api/leaderboard")
			.then((res) => {
				console.log("LeaderBoard", res.data.data);
				setLeaderBoard(res.data.data);
				setLoading(false);
			})
			.catch((err) => console.log("LeaderBoard Error:", err));
	}, []);
	return loading ? (
		<div>Loading...</div>
	) : (
		<div>
			{LeaderBoard.map((user, index) => {
				return <div key={index}>
                    <p>{user.username} {user.score}</p>
                </div>;
			})}
		</div>
	);
};

export default LeaderBoard;
