import React, { useState } from "react";
import "./App.css";

function App () {
  const [score, setScore] = useState(0)
  const [payment, setPayment] = useState(1)

  function increaseScore(){
    setScore(score + payment)
  }

  function increasePayment(){
    if (score >= 10) {
    setScore(score - 10)
    setPayment(payment + 1)
    } else {
      window.alert("You can't afford that!")
    }
  }

  function resetScore(){
    setScore(0)
    setPayment(1)
  }
  return (
      <main>
        {score < 100 ? (<div>
          <h1>Current Score: {score}</h1>
          <button onClick={increaseScore}>+{payment}</button>
          <button onClick={increasePayment}>Pay 10 points to change from +{payment} to +{payment + 1}</button>
        </div>) : (<div>
          <h2>You Win!</h2>
        <button onClick={resetScore}>Play again?</button>
        </div>)}

      </main>
    );
}

export default App;
