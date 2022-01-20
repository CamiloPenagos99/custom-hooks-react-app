import { useEffect, useState } from "react";

export const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log("custom hook", data, loading, error);
  const getData = async () => {
    try {
      setLoading(true);
      console.log("Despues del loading hook");
      const response = await fetch(url);
      const item = await response.json();
      setData(item);
      setLoading(false);
      console.log("Data...", JSON.stringify(item), loading);
    } catch (error) {
      console.error("Error fetch" + error.message);

      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Efecto del custom hook");
    getData();
  }, []);

  return [data, loading, error];
};

//"https://fakestoreapi.com/products/20"
