import { Typography } from "@mui/material";
import { useFetchData } from "../hooks/useFetchData";
import CardBox from "../material/card.ui";
import { LinearProgress } from "@mui/material";

export const Product = () => {
  const [data, loading, error] = useFetchData(
    "https://fakestoreapi.com/products/6"
  );

  if (loading || !data) {
    return (
      <div>
        <LinearProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2 style={{ color: "red" }}>Error...{error}</h2>
      </div>
    );
  }

  if (data) {
    return (
      <>
        <Typography variant="h5" component="h2">
          <h2>Producto</h2>
        </Typography>
        <hr />
        <CardBox
          title={data.title}
          image={data.image}
          description={data.description}
          price={data.price}
        ></CardBox>
      </>
    );
  }
};
