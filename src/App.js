import React, { useState } from "react";
import "./App.css";

function App () {
  const [score, setScore] = useState(0)
  const [click, setClick] = useState(1)

  function addScore(){
    setScore(score + click)
  }

  function addClick(){
    if (score < 10){
      window.alert("You can't afford that!")
    }
    else{
      setClick(click + 1)
      setScore(score - 10)
    } 
  }


  function resetScore(){
    setScore(0)
    setClick(1)
  }


    return (score >= 100)?
    (
      <main>
        {/* <h1>Current Score: {score}</h1> */}
        <h2>You Win! {score}</h2>
        <button onClick={resetScore}>Play again?</button>
      </main>
    )
    :
    (
      <main>
        <h1>Current Score: {score}</h1>
        <button onClick={addScore}>+{click}</button>
        <button onClick={addClick}>Pay 10 points to change from +{click} to +{click + 1}</button>
      </main>
    );
}

export default App;
