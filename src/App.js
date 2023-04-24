import React from "react";
import "./App.css";
import { useState } from "react";
function App () {
  const [score, setScore] =useState(0)
  const [pointIncrement, setPointIncrement] =useState(1)
  
  function increaseScore(){
    setScore(score + pointIncrement)
  }

  function increasePointIncrement(){
    if(score >= 10){
      setScore(score-10)
      setPointIncrement(pointIncrement+1)
    } else{
      window.alert("You can not afford that!")
    }
  }

    return (
      <main>
        <p>Current Score: {score}</p>
        {score <100 ? (
          <div>
            <button onClick = {increaseScore}> + {pointIncrement} </button>
            <button onClick={increasePointIncrement}>Pay 10 points to change from {pointIncrement} </button>
          </div>
        ):(
          <h2> You win!</h2>
        )}
      </main>
    );
}

export default App;
