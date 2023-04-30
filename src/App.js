import React, { useState } from "react";
import "./App.css";
 
function App () {
  const [points, setPoints] = useState(0)
  const [debt, payDebt] = useState(1)

  function clickThis(){
    setPoints(points + debt)
  }

  function payYourDebt(){
    if (points >= 10){
      setPoints(points - 10)
      payDebt(debt + 1)
    } else {
      window.alert("You can't afford that!")
    }
  }

  function resetThePoints(){
    setPoints(0)
    payDebt(1)
  }

    return (
      <main>
        <h1>Current Score: {points}</h1>
        {points < 100 ? (
          <div>
            <button onClick={clickThis}>+{debt}</button>
            <button onClick={payYourDebt} >Pay 10 points to change from +{debt} to +{debt + 1} </button>
          </div>
        ) : (
          <div>
            <h2>You Win!</h2>
            <button onClick = {resetThePoints}>Play again?</button>
          </div>
        )}
      </main>
    );
}

export default App;
