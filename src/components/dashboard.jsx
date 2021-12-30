import { Typography } from "@mui/material";

export const Dashboard = ({ valor }) => {
  console.log("Renderizado del dashboard");

  return (
    <div>
      <Typography variant="h5" component="h2">
        <h2>Tablero de control</h2>
        <hr />
      </Typography>
      <div>
        <p>Contador:</p>
        <p>{valor}</p>
      </div>
    </div>
  );
};
