import { Counter } from "./components/counter";
import { TodoApp } from "./components/todoApp";
import { Container } from '@mui/material';

function App() {
  return (
    <>
      <Container maxWidth="sm" />
      <div className="App">
        <Counter></Counter>
        <TodoApp></TodoApp>
      </div>
    </>
  );
}

export default App;
