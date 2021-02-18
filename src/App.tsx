import React from "react";

import Draggable from "./Draggable";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Draggable>
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </Draggable>
      </header>
    </div>
  );
}

export default App;
