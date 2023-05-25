import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPednding] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data from this url");
          }
          console.log(res);
          // *****  returning res.json() is so important!!!!!!!!!
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setIsPednding(false);
          setError(null);
        })
        .catch((err) => {
          setIsPednding(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
