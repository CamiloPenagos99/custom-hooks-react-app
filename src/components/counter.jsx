import React from "react";
import { useCounter } from "../hooks/useCounter"

export const Counter = () => {
  const [counter, increment, decrement, reset] = useCounter();
  return (
    <div>
      <h2>Contador</h2>
      <hr></hr>
      <h4>Clicks: {counter}</h4>
      <button onClick={increment}>Aumentar:</button>
      <button onClick={decrement}>Disminuir:</button>
      <br></br>
      <button onClick={reset}>Resetear:</button>
    </div>
  );
};
