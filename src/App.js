import { Container } from "@mui/material";

import { RouterNavBar } from "./components/navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <RouterNavBar></RouterNavBar>
      </Container>
    </div>
  );
}

export default App;
