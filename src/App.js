import { useState } from "react";
import React from "react";
import "./App.css";

function App() {

  const [score, setScore] = useState(0);
  const [game, setGame] = useState(1);
  const [show, setshow] = useState(false);

  function upgradeScore() {
    setScore(score + game)
    if (score >= 100) {
      setshow(true)
    }
  }
  
  function numberUp() {
    if (score > 9) {
      setScore(score - 10);
      setGame(game + 1)
    } else {
      alert(`You can't afford that!`)
    }
  }

  function resetScore() {
    setScore(0);
    setGame(1);
    setshow(false);
  }

  return (
    <main>
      <h1>Current Score: {score}</h1>
      <br />
      <button onClick={upgradeScore} style={show ? { display: 'none' } : { display: 'block' }}>+{game}</button>
      <button onClick={numberUp} style={show ? { display: 'none' } : { display: 'block' }}>Pay 10 points to change from +{game} to +{game + 1}</button>
      <h2 style={show ? { display: 'block' } : { display: 'none' }}>You Win!</h2>
      <button onClick={resetScore} style={show ? { display: 'block' } : { display: 'none' }}>Play again?</button>
    </main>
  );
}

export default App;