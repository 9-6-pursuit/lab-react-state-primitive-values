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
      </main>

    )
  }
    return (
      <main>
        <p>React State Lab</p>
      </main>
    );
}

export default App;
