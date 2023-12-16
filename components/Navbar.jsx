"use client";
import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";

const Navbar = () => {
	const { data: session } = useSession();
	const [providers, setProviders] = useState(null);
	const [loading, setLoading] = useState(true);
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		const setUpProviders = async () => {
			try {
				const response = await getProviders();
				console.log("Response--", response);
				setProviders(response);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching providers:", error);
			}
		};
		setUpProviders();
	}, []);

	return (
		<>
			{loading ? (
				<div>Welcome...</div>
			) : (
				<div>
					<div className="navbar">
						<nav>
							<Link href="/" className="logo">
								<Image
									src="/assets/images/logo.svg"
									alt="Logo"
									width={30}
									height={30}
									className="object-contain"
								/>
								<p className="logo_text">CodeMap</p>
							</Link>
							<div className="links">
								<ul>
									<li>
										<Link className="nav-item" href="/">
											Home |
										</Link>
									</li>
									<li>
										<Link className="nav-item" href="/problems">
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
											Leaderboard
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
								</div>
							) : (
								<>
									{providers &&
										Object.values(providers).map((provider) => (
											<button
												type="button"
												key={provider.name}
												onClick={() => signIn(provider.id)}
												className="signin"
											>
												Sign In
											</button>
										))}
								</>
							)}
						</nav>
						<hr />
					</div>

					<div className="mobile-nav">
						<Link href="/" className="logo">
							<Image
								src="/assets/images/logo.svg"
								alt="Logo"
								width={30}
								height={30}
								className="object-contain"
							/>
							<p className="logo_text">CodeMonk</p>
						</Link>
						{toggle ? (
							<MdCancel size="2rem" onClick={() => setToggle(!toggle)} />
						) : (
							<GiHamburgerMenu size="2rem" onClick={() => setToggle(!toggle)} />
						)}

						{toggle && (
							<div className="links">
								<ul>
									<li>
										<Link className="nav-item" href="/">
											Home
										</Link>
									</li>
									<li>
										<Link className="nav-item" href="#">
											Problems
										</Link>
									</li>
									<li>
										<Link className="nav-item" href="#">
											Quiz
										</Link>
									</li>
									<li>
										<Link className="nav-item" href="#">
											Leaderboard
										</Link>
									</li>
									<>
										{session?.user ? (
											<div className="user-detail">
												<button
													type="button"
													onClick={signOut}
													className="signin"
												>
													Sign Out
												</button>
											</div>
										) : (
											<>
												{providers &&
													Object.values(providers).map((provider) => (
														<button
															type="button"
															key={provider.name}
															onClick={() => signIn(provider.id)}
															className="signin"
														>
															Sign In
														</button>
													))}
											</>
										)}
									</>
								</ul>
							</div>
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default Navbar;
