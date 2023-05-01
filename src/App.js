import React from "react";
import {useState} from "react";
import "./App.css";

function App () {
const[score, setScore] = useState(0)
const [payAmount, setPayAmount] = useState(1)


// function refreshPage() {
//   window.location.reload(false);
// }


function increaseScore(){
  setScore(score + payAmount)
}

function increasePayAmount(){
  if(score>= 10){
// updates the points 
     setScore(score - 10)
     setPayAmount(payAmount + 1)
  }
  else {
window.alert("You can't afford that!")
  }
}

    return (
      <main>
        {score < 100 ? (
          <div>
            <h1>Current Score: {score}</h1>
            <button onClick={increaseScore}>+{payAmount}</button>
            <br></br>
            <button onClick={increasePayAmount}>Pay 10 points to change from +{payAmount} to +{payAmount + 1}</button>
         </div>
        ) : (
          <>
          <h2>You Win !</h2>
          <button onClick={() => window.location.reload(false)}>Play Again ?</button>
          </>
        )}
      </main>
    );
}

export default App;
