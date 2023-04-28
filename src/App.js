import React from "react";
import "./App.css";
import { useState } from "react";

function App () {

  const [score, setScore] = useState(0)
  const [pointIncrement, setPointIncrement] = useState(1)
  
  function increaseScore() {
    setScore(score + pointIncrement)
  }

  function increasePointIncrement() {
    if (score >= 10) {
      setScore(score - 10)
      setPointIncrement(pointIncrement+1)
    } else {
      window.alert("You can't afford that!")
    }
  }

  function resetScore() {
    setScore(score - score)
    setPointIncrement(pointIncrement - (pointIncrement - 1))
    // pointIncrement(!pointIncrement)
  }

  
  return (
    <main>
      <h1>Current Score: {score}</h1>
      {score < 100 ? (
        <div>     
                  <button className="increaseScoreButton" onClick={increaseScore}>+{pointIncrement}</button> <br /><br />
                  <button className="incrementRaiseButton" onClick={increasePointIncrement} >Pay 10 points to change from +{pointIncrement} to +{pointIncrement + 1}</button>
                  </div>
                  ) : (
                    <h2>You win! <br /> 

                      <button onClick={resetScore}>Play again</button>
                    </h2>
                  )}
                  </main>
                );
              }
              
        

export default App;

//Can only "return" ONE html element. All html elements must be under one tag. In this case, the <h1> "Current Score" was moved under the "main" tag. 