import { useStore } from "../zustand/store";
import { Button } from "@mui/material";

export const Users = () => {
  console.log('Render del componente usuarios')
  const store = useStore()
  return (
    <>
      <div>Usuarios</div>
      <div>{JSON.stringify(store.users)}</div>
      <Button variant="contained" onClick={store.removeUsers}>Limpiar</Button>
      <Button variant="contained" onClick={store.fillUsers}>Rellenar</Button>
    </>
  );
};
