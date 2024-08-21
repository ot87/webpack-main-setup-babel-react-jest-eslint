import { useState } from "react";

import "./App.css";
import AddIcon from "./add.svg";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <main className="app">
      <div className="counter">
        <h1>Webpack Main Setup</h1>
        <p>Count: {counter}</p>
        <button
          className="btn ax-button"
          onClick={() => setCounter((s) => s + 1)}
        >
          <AddIcon />
        </button>
      </div>
    </main>
  );
};

export default App;
