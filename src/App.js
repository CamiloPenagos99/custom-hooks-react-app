import { Counter } from "./components/counter";
import { TodoApp } from "./components/todoApp";
import { Product } from "./components/products";
import { Container } from '@mui/material';

function App() {
  return (
    <>
      <Container maxWidth="sm" />
      <div className="App">
        <Counter></Counter>
        <TodoApp></TodoApp>
        <Product></Product>
      </div>
    </>
  );
}

export default App;
