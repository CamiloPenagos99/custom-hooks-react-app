import { useEffect, useState } from "react";

export const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
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
    getData();
  }, []);

  return [data, loading, error];
};

//"https://fakestoreapi.com/products/20"
