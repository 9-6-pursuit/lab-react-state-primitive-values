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

    return (
      <main>
        <p>React State Lab</p>
      </main>
    );
}

export default App;
