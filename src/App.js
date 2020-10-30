import React, { useState, useEffect } from "react";
import "./App.scss";

function App() {
  const [counter, setCounter] = React.useState(15);
  const onCounterClick = () => {
    setCounter(15);
  };

  // Third Attempts
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 5000);
    return () => clearInterval(timer);
  }, [counter]);
  return (
    <div className="App">
      <header className={"App-header " + "count-" + counter}>
        <div>
          <h1 id="counter" className={"timer-display " + "count-" + counter}>
            {counter}
          </h1>
        </div>
        <div>
          <button class="button" onClick={onCounterClick}>
            ᛖᛁᛊᚢᛒᚦ
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
