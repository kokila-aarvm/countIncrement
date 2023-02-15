import React, { useEffect, useState } from "react";
import "./App.css";
import DisplayName from "./DisplayName";

function App() {
  let [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  // useEffect(() => {
  //   console.log("use effect rendered");
  // });
  useEffect(() => {
    if (count === 10) {
      setMessage("Congrats");
    } else {
      setMessage("");
    }
  }, [count]);

  let increment = () => {
    setCount(count + 1);
  };
  let decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <input type="text" value={count} />
      <button onClick={increment}>+</button>
      {count !== 5 ? <DisplayName count={count} /> : null}
      <div>{message}</div>
    </div>
  );
}

export default App;
// useCallback,useMemo,closures,memoization,useState, useEffect, (Theory)
// submitlist using react(useState, useEffect, useCallback)
