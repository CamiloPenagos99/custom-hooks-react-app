import { Container } from "@mui/material";

import { RouterNavBar } from "./components/navbar";

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
