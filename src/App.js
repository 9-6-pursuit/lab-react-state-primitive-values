import React from "react";
import "./App.css";
import { useState } from "react";

function App () {
  const [score, setScore] = useState(0)
  const [buttonNumber, setButtonNumber] = useState(1)
  const buttonPlus = buttonNumber+1

  function increaseScore() {
    setScore(score + buttonNumber)
  }

  function buttonScore() {
    if(score<10){
      window.alert("You can't afford that!")
    } else {
    setScore(score-10)
    setButtonNumber(buttonNumber+1)
  }}


  //I had to look this part up, but in order to get back to the initial page, I had the page refresh from the server instead of from the cached version.

  function playAgain() {
    window.location.reload()
  }


    return (
      <>
        <p>React State Lab</p>
          <main>
            {score < 100 ? (
              <div id="initial-screen">                          
                <h1>Current Score: {score}</h1>
                <button onClick={increaseScore}>+{buttonNumber}</button>
                <button onClick={buttonScore}>Pay 10 points to change from +{buttonNumber} to +{buttonPlus}</button>
              </div>
            ) : (
              <div id="victory-screen">
                <h2>You Win!</h2>
                <h3>Your score was {score}.</h3>
                <button onClick={playAgain}>Play again?</button>
              </div>              
            )}     
          </main>
        </>
    );  
}

export default App;

/* ------- psuedocode for this lab -------
- My score starts at 0. The goal is to get to 100. (state: score)
- I want a button that will increase my score by the number of points on said button. This starts at 1. (addButton)
- I want a button that gives me the option to increase the number of the addButton. Using the button will decrease my score by ten. (decrementButton)
- If I try to use the decrement button without having enough points, I should get a window popping up saying that I cannot do that (window)
- When I reach 100, I should get a messsage saying that I WIN! and there should be an option to restart the game. (message, restartButton).
  -For this winner screen, to get it, we can do a ternery operator. <main>

*/
