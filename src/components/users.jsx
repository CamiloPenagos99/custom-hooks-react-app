import { useStore } from "../zustand/store";
import { Button } from "@mui/material";
import { Panel } from "./panel";
import { Typography } from "@mui/material";
import { List } from "@mui/material";

export const Users = () => {
  console.log("Render del componente usuarios");
  const store = useStore();

  return (
    <>
      <Typography variant="h5" component="h2">
        <h2>Usuarios</h2>
      </Typography>
      <List>
        {store.users.map((user) => (
          <li key={user.id}>
            <Typography variant="h5" component="h2" align="left">
              <span style={{ fontWeight: "bold" }}> {user.name}</span>
              <span> - {user.section}</span>
            </Typography>
          </li>
        ))}
      </List>
      <Button variant="outlined" onClick={store.removeUsers}>
        Limpiar
      </Button>
      <Button variant="contained" onClick={store.fillUsers}>
        Rellenar
      </Button>
      <hr />
      <Panel></Panel>
    </>
  );
};
