import React from "react";
import { useState } from "react"
import "./App.css";



function App() {
  const [score, setScore] = useState(0);
  const [pointIncrement, setIncrement] = useState(1);
  const [win, setWin] = useState(false);

  const increaseScore = () => {
    setScore(score + pointIncrement);
  };

  const increasePointIncreament = () => {
    if (score >= 10) {
      setScore(score - 10);
      setIncrement(pointIncrement + 1);
    } else {
      alert("You can't afford that!");
    }
  };

  const reset = () => {
    setScore(0);
    setIncrement(1);
    setWin(false);
  };

  if (score >= 100 && !win) {
    setWin(true);
  }

  return (
    <main>
      {!win && <h1>Current Score: {score}</h1>}

      {!win && (
        <>
          <button onClick={increaseScore}>+{pointIncrement}</button>
          <button onClick={increasePointIncreament}>
            Pay 10 points to change from +{pointIncrement} to +{pointIncrement + 1}
          </button>
        </>
      )}

      {win && ( /* If won game, display win message and play again btn*/
        <>
          <h2>You Win!</h2>
          <button onClick={reset}>Play again?</button>
        </>
      )}
    </main>
  );
  
}

export default App;