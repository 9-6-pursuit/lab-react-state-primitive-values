import React from "react";
import "./App.css";
import { useState } from "react";

function App () {
  const [score, setScore] = useState(0)
  const [increment, setIncrement] = useState(1)

  function changeScore(){
    setScore(score + increment)
  }

  function changeIncrements(){
   if(score < 10) {
    window.alert(`You can't afford that!`)
   }
    else {
      setIncrement(increment + 1)
      setScore(score -10)
    }
  }

  function resetCounter(){
    setIncrement(1)
    setScore(0)
  }

  if(score < 100) {
    return (
      <main>
        <h2>Current Score: {score}</h2>
        <button className="add_button" onClick={changeScore}>+{increment}</button>
        <button className="pay_ten" onClick={changeIncrements}>Pay 10 points to change from +{increment} to + {increment + 1}</button>
      </main>

    )
  } else {
  }
    return (
      <main>
        <div>
          <h2>You Win!</h2>
          <button onClick={resetCounter}> Try Again ?</button>
        </div>
      </main>
    );
}

export default App;
