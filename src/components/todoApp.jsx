import { useTodo } from "../hooks/useTodo";
import { useState } from "react/cjs/react.development";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import List from "@mui/material/List";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

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
      <Typography variant="h5" component="h2">
        <h2>Todo App</h2>
      </Typography>
      <hr />

      <TextField
        onChange={(event) => setTitle(event.target.value)}
        id="outlined-basic"
        label="tarea"
        variant="outlined"
      />

      <Button
        onClick={() => addTodo({ title })}
        variant="contained"
        endIcon={<SendIcon />}
      >
        Agregar
      </Button>

      <List>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Typography variant="h5" component="h2">
              <span> {todo.title}</span>
              <IconButton aria-label="delete" onClick={() => deleteTodo(todo)}>
                <DeleteIcon />
              </IconButton>
            </Typography>
          </li>
        ))}
      </List>
    </div>
  );
};
