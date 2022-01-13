import { useStore } from "../zustand/store";
import { Typography } from "@mui/material";

export const Panel = () => {
  console.log("Render del panel usuarios");
  const { users } = useStore();
  return (
    <div>
      <Typography variant="h5" component="h2">
          <h2>Panel Usuario</h2>
        </Typography>
      <p>
      <Typography variant="h5" component="h4">
        <p>Cantidad de Usuarios: </p>
        <span style={{ fontWeight: "bold", color: "blue" }}>{users.length}</span>
      </Typography>
        
      </p>
    </div>
  );
};
