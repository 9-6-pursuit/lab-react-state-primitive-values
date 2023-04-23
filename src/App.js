
import "./App.css";
import { React, useState } from "react";
import Game from "./Game.js";
import Restart from "./Restart.js";

function App() {
  const [win, setWin] = useState(false);
  const [score, setScore] = useState(0);
  const [inc, setInc] = useState(1);
  return (
    <main>
      <p>React State Lab</p>
      {!win ? (
        <Game
          setWin={setWin}
          win={win}
          setInc={setInc}
          setScore={setScore}
          score={score}
          inc={inc}
        />
      ) : null}
      {win ? (
        <Restart
          setWin={setWin}
          win={win}
          setInc={setInc}
          setScore={setScore}
        />
      ) : null}
    </main>
  );
}

export default App;
