"use client";
import React, { useState,useEffect } from "react";
import "../styles/navbar.css";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
	const { data: session } = useSession();
	const [providers, setProviders] = useState(null);
	useEffect(() => {
		console.log("Came heree")
		const setUpProviders = async () => {
			const response = await getProviders();
			{
				console.log("Respomse--",response);
			}
			setProviders(response);
			{console.log(providers,"---",providers)}
		};
		setUpProviders();
	}, []);
	return (
		<div className="navbar">
			<nav>
				<Link href="/" className="logo">
					<Image
						src="/assets/images/logo.svg"
						alt="Logo "
						width={30}
						height={30}
						className="object-contain"
					/>
					<p className="logo_text">CodeMonk</p>
				</Link>
				{console.log("session",session)}
				<div className="links">
					<ul>
						<li>
							<Link className="nav-item" href="#">
								Home |
							</Link>
						</li>
						<li>
							<Link className="nav-item" href="#">
								Problems |
							</Link>
						</li>
						<li>
							<Link className="nav-item" href="#">
								Quiz |
							</Link>
						</li>
						<li>
							<Link className="nav-item" href="#">
								Leaderboard{" "}
							</Link>
						</li>
					</ul>
				</div>
				{session?.user ? (
					<div className="user-detail">
						<p>Welcome {session.user.name}!!</p>
						<button type="button" onClick={signOut} className="signin">
							Sign Out
						</button>
						{/* <Link href="/profile">
							<Image
								src={session.user.image}
								width={37}
								height={37}
								className="rounded-full"
								alt="profile"
							/>
						</Link> */}
					</div>
				) : (
					<>
						{providers &&
							Object.values(providers).map((provider) => {
								return (
									<button
										type="button"
										key={provider.name}
										onClick={() => signIn(provider.id)}
										className="signin"
									>
										Sign In
									</button>
								);
							})}
					</>
				)}
			</nav>
			<hr />
		</div>
	);
};

export default Navbar;
