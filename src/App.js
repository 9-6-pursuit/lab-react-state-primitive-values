import React from "react";
import "./App.css";
import { useState } from "react";

function App () {
  const [score, setScore] = useState(0);
  const [points, setPoints] = useState(1)
  const [scoreDisplay, setScoreDisplay] = useState(true)

  function addPoint(){
    setScore(score + points)
  }

  function payPoints(){
    if(score >= 10) {
      setPoints(points +1)
      setScore(score - 10)
    } else {
      alert(`You can't afford that!`)
    }

    //CAN WE WRITE A TERNARY W/ MULTI EXPRESSIONS???
    // score > 10 ? (setPoints(points + 1) && setScore(score - 10)) : alert('not enough')
  }

  function playAgain(){
    setScore(0)
    setPoints(1)
  }

    return (
      <main>
        {(score < 100) ? (
          <div>
             <h3 style={scoreDisplay ? {display: 'block'} : {display: 'none'}}>Current Score: {score}</h3>
             <button onClick={addPoint}>+{points}</button> <br/>
             <button onClick={payPoints}>Pay 10 points to change from +{points} to +{points + 1 } </button>
          </div>
        ) : (
          <div>
            <h2>You Win!</h2>
            <button onClick={playAgain}> Play again?</button>
          </div>
        ) }
      </main>
    );
}

export default App;
