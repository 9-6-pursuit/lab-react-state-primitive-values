import React from "react";
import { useState } from "react"
import "./App.css";

function App () {
  const [score, setScore] = useState(0)
  const [pointIncrement, setPointIncrement] = useState(1)
  const [gameOver, setGameOver] = useState(false);

  function increaseScore() {
    setScore(score + pointIncrement)
  }

  function increasePointIncrement(){
    if(score >= 10){
      //Update the point increment
      setScore(score - 10)
      setPointIncrement(pointIncrement + 1)
    } else {
      //Tell player they can't afford it
      window.alert("You can't afford that!")
    }
  }
  function resetGame() {
    setScore(0)
    setPointIncrement(1)
    
  }
  return (
      <main>
        <h1>Current Score: {score}</h1>
        {score < 100 ? (
          <div>
          <button onClick={increaseScore}>+{pointIncrement}</button>
          <button onClick={increasePointIncrement}>Pay 10 points to change from +{pointIncrement} to +{pointIncrement + 1}</button>
          </div>
        ) : (
          <div><h2>You Win!</h2>
          <button onClick={resetGame}>Play Again?</button></div>
          )}
      </main>
    );
}

export default App;
