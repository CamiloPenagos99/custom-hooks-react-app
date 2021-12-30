import React from "react";
import { useCounter } from "../hooks/useCounter";
import { Dashboard } from "./dashboard";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

export const Counter = () => {
  console.log("Render del counter");
  const [counter, increment, decrement, reset] = useCounter();
  return (
    <div>
      <Typography variant="h5" component="h2">
        <h2>Contador</h2>
      </Typography>
      <hr></hr>
      <h4>Clicks: {counter}</h4>
      <Button variant="outlined" onClick={increment}>
        Aumentar:
      </Button>
      <Button variant="outlined" onClick={decrement}>
        Disminuir:
      </Button>
      <br></br>
      <Button variant="outlined" onClick={reset}>
        Resetear:
      </Button>
      <div>
        <Dashboard valor={counter}></Dashboard>
      </div>
    </div>
  );
};
