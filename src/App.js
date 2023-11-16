import { useState } from "react";
import React from "react";
import "./App.css";

function App() {
  const [val, setVal] = useState(0);
  return (
    <div className="app">
      <div className="content">
        <div className="counter">
          <textarea readOnly placeholder={val}></textarea>
        </div>
        <div className="buttons">
          <button
            onClick={(event) => {
              setVal(val - 1);
            }}
          >
            -
          </button>
          <button
            onClick={(event) => {
              setVal(val + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
