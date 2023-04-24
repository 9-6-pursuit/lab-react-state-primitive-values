import React from "react";
import { useState } from "react";
import "./App.css";

function App () {
    const [score, setScore] = useState (0)
    const [payAmount, setPayAmount] = useState (1)


    function increaseScore() {
      setScore (score + payAmount)
    }

    function increasePointIncrement(){
      if (score >= 10) {
        setScore(score -10)
        setPayAmount(payAmount + 1)
      } else {
      window.alert("You can't afford that!")
    }
  }

    return (
      <main>
        <h1>Current Score: {score}</h1>
        {score < 100 ? (
          <div>
            <button onClick={increaseScore}>+1</button>
            <button onClick={increasePointIncrement}>Pay 10 points from +8 to +9</button>
          </div>
            ) : (
         <h2>You Win!</h2>
        )}
      </main>
    )
}

export default App;
