/** @format */

import React, { useState } from "react";
import "./App.css";

function App(props) {
	const [score, setScore] = useState(props.score);
	const [adition, setAdition] = useState(props.adition);

	function buyIncrement() {
		if (score < 10) {
			alert("You can't afford that!");
		} else {
			setScore(score - 10);
			setAdition(adition + 1);
		}
	}

	function restart() {
		setScore(0);
		setAdition(1);
	}

	function add() {
		setScore(score + adition);
	}

	return (
		<main>
			{score < 100 ? (
				<>
					<h1>Current Score: {score}</h1>
					<button onClick={add}>+{adition}</button>
					<button onClick={buyIncrement}>
						Pay 10 points to change from +{adition} to +
						{adition + 1}
					</button>
				</>
			) : (
				<>
					<h2>You Win!</h2>
					<button onClick={restart}>Play again?</button>
				</>
			)}
		</main>
	);
}

export default App;
