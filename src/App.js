// import React, { useState } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [pointIncrement, setPointIncrement] = useState(1);

  function increaseScore() {
    setScore(score + pointIncrement)
  }

  function increasePointIncrement() {
    if (score >= 10) {
      setScore(score - 10)
      setPointIncrement(pointIncrement + 1)
    } else {
      window.alert("You can't afford that!")
    }
  }

  const playAgain = () => {
    setScore(0)
    setPointIncrement(1)

  };

  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    }}>
      {score < 100 ? (
        <div>
          <h1>Current Score: {score}</h1>
          <div style={{ marginBottom: "10px" }}>
            <button onClick={increaseScore}>+{pointIncrement}</button>
          </div>
          <div>
            <button onClick={increasePointIncrement}>Pay 10 points to change from +{pointIncrement} to +{pointIncrement + 1}</button>
          </div>
        </div>
      ) : (
        <div>
          <h2>You Win!</h2>
          <button onClick={playAgain}>Play again?</button>
        </div>
      )}
    </main>
  );
}

export default App;
