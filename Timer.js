import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Play from "./Play";
import Pause from "./Pause";
import { useContext, useState, useEffect } from "react";
import TimerContext from "./TimerContext";

function Timer() {
  const timerInfo = useContext(TimerContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("work");
  const [secondsLeft, setSecondsLeft] = useState(timerInfo.workMinutes * 60);

  useEffect(() => {
    let interval = null;

    if (!isPaused) {
      interval = setInterval(() => {
        if (secondsLeft === 0) {
          const nextMode = mode === "work" ? "break" : "work";
          const nextSeconds =
            nextMode === "work"
              ? timerInfo.workMinutes * 60
              : timerInfo.breakMinutes * 60;

          setMode(nextMode);
          setSecondsLeft(nextSeconds);
        } else {
          setSecondsLeft(secondsLeft - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isPaused, secondsLeft, mode, timerInfo]);

  const playTimer = () => {
    setIsPaused(false);
    // nextMode = "work";
  };

  const pauseTimer = () => {
    setIsPaused(true);
    // nextMode = "work";
  };

  const totalSeconds =
    mode === "work" ? timerInfo.workMinutes * 60 : timerInfo.breakMinutes * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);
  let minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return (
    <div>
      <div className="card" style={{ backgroundColor: "#b1f2ff" }}>
        <div className="card-header">
          <input
            type="text"
            className="inputBox1"
            style={{
              backgroundColor: "lightblue",
              fontWeight: "bold",
              textSizeAdjust: "60px",
            }}
          />
        </div>

        <div className="card-body">
          {mode === "break" ? <h2>Break:</h2> : <h2>Work:</h2>}
          <br />
          <CircularProgressbar
            value={percentage}
            text={minutes + ":" + seconds}
            styles={buildStyles({
              textColor: "blue",
              pathColor: "darkblue",
              trailColor: "grey",
            })}
          />
        </div>

        <div className="card-footer">
          <div>
            {isPaused ? (
              <Play onClick={playTimer} className="btn btn-primary" />
            ) : (
              <Pause onClick={pauseTimer} className="btn btn-primary" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
