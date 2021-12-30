import { useState } from "react";

export const useTodo = (initial) => {
  const [todos, setTodos] = useState(initial);

  const addTodo = (tarea) => {
    tarea.id = Date.now();
    setTodos((current) => current.concat(tarea));
  };

  const deleteTodo = (tarea) => {
    const newTodos = todos.filter((todo) => todo.id !== tarea.id);
    setTodos(newTodos);
  };

  return [todos, addTodo, deleteTodo];
};
