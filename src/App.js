import React from "react";
import "./App.css";
import { useState } from "react";

function App () {
    const [score, setScore] = useState(0)
    const [pointIncrement, setPointIncrement] = useState(1)

    function increaseScore(){
      setScore(score + pointIncrement)
    }

    function increasePointIncrement(){
      if (score >= 10) {
        setScore(score - 10)
        setPointIncrement(pointIncrement + 1)
      } else {
        window.alert("You can't afford that!")
      }
    }

    function resetScore(){
      setScore(0)
      setPointIncrement(1)
    }
    return (
      <main>
        {score < 100 ? (
          <div>
            <h1>Current Score: {score}</h1>
            <button onClick={increaseScore}>+{pointIncrement}</button>
            <button onClick={increasePointIncrement}>Pay 10 points to change from +{pointIncrement} to +{pointIncrement + 1}</button>
          </div>
        ) : (
          <div>
          <h2>You Win!</h2>
          <button onClick={resetScore}>Play again?</button>
          </div>
        )}
      </main>
    );
}


export default App;
