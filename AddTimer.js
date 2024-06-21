import { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TimerContext from "./TimerContext";

function AddTimer({ addComponent }) {
  const timerInfo = useContext(TimerContext);
  // console.log(timerInfo.setWorkMinutes(12), "hello", timerInfo);

  const handleWork = (e) => {
    const a = timerInfo.setWorkMinutes(e.target.value);

    console.log(e);
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary rounded-circle floating-button"
        data-bs-toggle="offcanvas"
        data-bs-target="#demo1"
      >
        +
      </button>

      <div className="offcanvas offcanvas-end" id="demo1">
        <div className="offcanvas-header">
          <h1 className="offcanvas-title">Create Timer</h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="side-by-side">
            <h3>Title:</h3>

            <input type="text" className="" placeholder="Type something" />
          </div>
          <div>
            <h3>Work:</h3>
            <input
              type="number"
              max={300}
              // value={workMinutes}
              min={20}
              // value={timerInfo.workMinutes}
              onChange={(newValue) =>
                timerInfo.setWorkMinutes(newValue.target.value)
              }
              // onChange={handleWork}
              className="wbInput"
              required
            />
          </div>
          <div className="side-by-side">
            <h3>Break</h3>
            <input
              type="number"
              max={60}
              min={5}
              // value={timerInfo.breakMinutes}
              onChange={(newValue) =>
                timerInfo.setBreakMinutes(newValue.target.value)
              }
              className="wbInput"
              required
            />
          </div>
          <button
            onClick={addComponent}
            className="btn btn-danger"
            type="button"
            style={{ marginTop: "25px", alignSelf: "end" }}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTimer;
