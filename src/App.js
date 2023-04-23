import React, { useState } from "react";
import "./App.css";

function App () {
  const [score, setScore] = useState(0);
  const [pointIncrement, setPointIncrement] = useState(1);

  function increaseScore() {
    setScore(score + pointIncrement);
  }
  function startOver() {
    setScore(0);
    setPointIncrement(1);
  }

  function increasePointIncrement() {
    if (score >= 10) {
      setScore(score - 10);
      setPointIncrement(pointIncrement + 1);
    }
    else {
      window.alert("You can't afford that!");
    }
  }

  return (
    <main>
      {score < 100 ? (
        <>
          <h1>Current Score: {score}</h1>
          <button onClick={increaseScore}>+{pointIncrement}</button>
          <button onClick={increasePointIncrement}>Pay 10 points to change from +{pointIncrement} to +{pointIncrement + 1}</button>
        </>
        ) : (
        <>
          <h2>You Win!</h2>
          <button onClick={startOver}>Play again?</button>
        </>
      )}
    </main>
  );
}

export default App;
