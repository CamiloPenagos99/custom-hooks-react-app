export const Dashboard = ({ valor }) => {
  console.log("Renderizado del dashboard");

  return (
    <div>
      <h3>Tablero de control</h3>
      <div>
        <p>Contador:</p>
        <p>{valor}</p>
      </div>
    </div>
  );
};
