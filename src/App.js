import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<Weather defaultCity="Maputo" />
				<footer>
					This project was coded by{" "}
					<a
						href="https://www.shecodes.io/graduates/105285-angela-mugabe"
						target="_blank"
						rel="noopener noreferrer"
					>
						{" "}
						Angela Mugabe{" "}
					</a>{" "}
					, is open sourced on{" "}
					<a
						href="https://github.com/anglmugabe/weather-react-application"
						target="_blank"
						rel="noopener noreferrer"
					>
						{" "}
						GitHub
					</a>
					and hosted on
					<a
						href="https://appmeteorologicoreact.netlify.app/"
						target="_blank"
						rel="noopener noreferrer"
					>
						{" "}
						Netlify{" "}
					</a>
					.
				</footer>
			</div>
		</div>
	);
}
