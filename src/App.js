import React, {useState} from "react";
import "./App.css";
<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=DynaPuff&family=Open+Sans&family=Roboto:wght@300&family=Shantell+Sans:wght@300;400;500&display=swap');
</style>

function App () {
  // this part of the fxn uses useState hooks to keep track of the current score, the current incrementor value and the pay button text. 

    const [score, setScore] = useState(0); //here I am using useState to define the variable and fxn.variable is score, the fxn is setScore; useState is setting the default value of score to 0;

    const [pointIncrease, setPointIncrease] = useState(1); //pointIncrease default value is 1. 

    const [payButtonText, setPayButtonText] = useState("Pay 10 points to change from +1 to +2"); //this component displays the current score, the +X button, and the Pay 10 points to change from +X to +Y button.


//useState is a hook fxn that allows us to add state to a fxnal component. State info that can be stored and updated over time can affect how the component is rendered on the web. with "useState" we can declare a state variable and a fxn to update that variable (see example above) and then use them in your component to render the UI based on the current value of the state variable. 

    function increaseScore() {
      setScore(score + pointIncrease);
    }
    // the increaseScore fxn increases the score by the current incrementor value when the user clicks +x.

    function payToPlay() {
      if (score >= 10) {
        setScore(score-10);
        setPointIncrease(pointIncrease + 1);
        setPayButtonText(`Pay 10 points to change from +${pointIncrease} to +${pointIncrease + 1}`);
      }
      else { 
        window.alert("You can't afford that!")
      }
    }
    // this fxn checks if the player has enough points to pay for the incrementor upgrade and, if so, updates the score, the incrementor, and the pay button text. 

    function startOver() {
      setScore(0);
      setPointIncrease(1);
    }
    // this fxn resets the score, incrementor, and pay button text when the user wins the game and clicks the "Play again?" button.
    

    if (score >= 100) {
      return (
        <div>
          <h2>You Win!</h2>
          <button onClick={startOver}>Play again?</button>
        </div>
      );
    }

    return (
      <div className="container">
        <h3>Current Score: {score}</h3>
        <button className="button1" onClick={increaseScore}>+{pointIncrease}</button>
        <button className="button2" onClick={payToPlay}>{payButtonText}</button>
      </div>
    )
}

export default App;
