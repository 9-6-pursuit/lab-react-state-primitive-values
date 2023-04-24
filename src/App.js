import React from "react";
import { useState } from 'react'
import "./App.css";

function App () {
    const [score, setscore] = useState(0)
    const [pay, setPay] = useState(1)

    function increaseScore() {
      setscore(score + pay)
    }

    function increasePoint() {
      if(score >= 10) {
       setscore(score - 10)
       setPay(pay + 1)
      }
      else {
        window.alert("You can't afford that!")
      }
    }

   function restartGame() {
      setscore(0)
      setPay(1)
    }

   
      return (
      <main>
        <h1>Current Score: {score}</h1>
        {score < 100 ? (
          <div>
            <button onClick={increaseScore}>+{pay}</button>
            <button onClick={increasePoint}>Pay 10 points to change from +{pay} to +{pay + 1}</button>
          </div>

        ): (
        <div>
          <h2>You Win!</h2>
          <button onClick={restartGame}>Play again?</button>
        </div>
        )}
      </main>
  )
}
export default App;
