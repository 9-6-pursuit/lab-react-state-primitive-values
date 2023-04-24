import React from "react";
import { useState } from "react";
import "./App.css";

function App () {
    const [score, setScore] = useState(0)
    const [pointIncrement, setPointIncrement] = useState(1)
    
    function inscreaseScore () {
      setScore(score + pointIncrement)
    }
    
    function increasePointIncrement () {
      if (score >= 10) {
        setScore(score - 10)
        setPointIncrement(pointIncrement + 1)
      } else {
        window.alert("You can't afford that!")
      }
    }

    return (
      <main>
        <h1>Current Score: {score}</h1>
        {score < 100 ? (
          <div>
            <button onClick={inscreaseScore}>+{pointIncrement}</button>
            <button onClick={increasePointIncrement}>Pay 10 points to change from +{pointIncrement + 1}</button>
          </div>
        )}
      </main>
    )
}

export default App;
