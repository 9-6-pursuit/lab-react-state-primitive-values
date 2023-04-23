import React from "react";
import "./App.css";
import { useState } from "react";

function App () {
  const [score, setScore] = useState(0)
  const [increment, setIncrement] = useState(1)

  function changeScore(){
    setScore(score + increment)
  }
  
    return (
      <main>
        <p>React State Lab</p>
      </main>
    );
}

export default App;
