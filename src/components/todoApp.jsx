import { useTodo } from "../hooks/useTodo";
import { useState } from "react/cjs/react.development";

const initialValues = [
  { id: 1, title: "Apender React" },
  { id: 2, title: "Apender Next" },
  { id: 3, title: "Apender Node" },
];

export const TodoApp = () => {
  const [todos, addTodo, deleteTodo] = useTodo(initialValues);
  const [title, setTitle] = useState("");

  return (
    <div>
      <input type="text" onChange={(event) => setTitle(event.target.value)} />
      <button onClick={() => addTodo({ title })}>Add ✅</button>
      <h3>Todo App</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => deleteTodo(todo)}> Delete ❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
