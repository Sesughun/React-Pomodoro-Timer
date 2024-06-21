import React, { useState, useEffect } from "react";
import "./App.css";
import Timer from "./Timer";
import TimerContext from "./TimerContext";
import AddTimer from "./AddTimer";
import QuoteCarousel from "./Quotes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import FunStuff from "./FunStuff";

function App() {
  const [workMinutes, setWorkMinutes] = useState(20);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [components, setComponents] = useState([]);
  const [showInput, setShowInput] = useState(true);

  useEffect(() => {}, [components]);

  const addComponent = () => {
    setComponents([...components, <Timer key={components.length} />]);
    setShowInput(false);
  };

  return (
    <div
      className="container-fluid mt-3 content"
      style={{ backgroundColor: "#d8f9ff" }}
    >
      <h1 style={{ fontSize: "60px" }}>Milan's Pomodoro Timer</h1>

      <QuoteCarousel />
      <br />
      <br />

      <div className="d-flex align-items-center">
        <main>
          <TimerContext.Provider
            value={{
              workMinutes,
              breakMinutes,
              setWorkMinutes,
              setBreakMinutes,
              showInput,
              setShowInput,
            }}
          >
            <div className="timers">
              <Timer />
              {components}
            </div>

            <AddTimer addComponent={addComponent} />
          </TimerContext.Provider>
        </main>
      </div>

      <FunStuff />
    </div>
  );
}

export default App;
