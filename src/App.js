import React, { useState } from "react";
import "./App.css";

function App () {
  const [score, setScore] = useState(0)
  const [raiseBy, setRaiseBy] = useState(1)
  

  function increaseScore() {
    setScore(score + raiseBy)
  }

  function increaseRaiseBy() {
    if (score >= 10){
      setScore(score - 10)
      setRaiseBy(raiseBy + 1)
    }else {
      window.alert("You can't afford that")
    }
  }

  function refresh() {
    setScore(0)
    setRaiseBy(1)
  }

  return (
    <main>
      <h1>Current Score: {score}</h1>
      {score < 100 ? (
      <>
        <button onClick={increaseScore}>+{raiseBy}</button>
        <button onClick={increaseRaiseBy}>Pay 10 points to change from +{raiseBy} to +{raiseBy + 1}</button>
      </>) : (
        <>
          <h2>You Win!</h2>
          <button onClick={refresh}>Play again</button>
        </>
      )}  
    </main>
  );
}

export default App;
