import "../styles/globals.css";
import Navbar from "../components/Navbar.jsx";
import Provider from "../components/Provider";
import Footer from "../components/Footer";

export const metadata = {
	title: "CodeMonk",
	description: "A place of heaven for coders",
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<Provider>
					<div className="main">
						<main className="app">
							<Navbar />
							{children}
							<Footer />
						</main>
					</div>
				</Provider>
			</body>
		</html>
	);
};

export default RootLayout;
