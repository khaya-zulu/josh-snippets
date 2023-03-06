import reactLogo from "./assets/react.svg";
import "./App.css";

import React from "react";

// TODO: add changesets
// TODO: add touch listener on useMousePostion
// TODO: scale up cursor as we get closer to the center
import { useMousePosition } from "./hooks/use-mouse-postion";

function App() {
  const spinnerRef = React.useRef<HTMLImageElement>(null);

  const { x, y, angle } = useMousePosition({
    spinnerRef,
  });

  return (
    <div className="App">
      <div className="react-ball" style={{ left: x, top: y }} />
      <a href="https://reactjs.org" target="_blank">
        <img
          ref={spinnerRef}
          src={reactLogo}
          className="logo react"
          alt="React logo"
          style={{ transform: `rotate(${angle}deg)` }}
        />
      </a>
    </div>
  );
}

export default App;
