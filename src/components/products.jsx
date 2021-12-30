import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CardBox from "../material/card.ui";

export const Product = () => {
  const [product, setProduct] = useState(null);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products/20");
    const item = await response.json();
    setProduct(item);
  };
  useEffect(() => {
    getData();
  }, []);

  if(!product) return (<div>Loading...</div>)
  return (
    <>
      <Typography variant="h5" component="h2">
        <h2>Producto</h2>
      </Typography>
      <hr />
      <CardBox
        title={product.title}
        image={product.image}
        description={product.description}
        price={product.price}
      ></CardBox>
     
    </>
  );
};
