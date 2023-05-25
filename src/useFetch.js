import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPednding] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    // using abort controller to handel custom hook error while we chnage screen fast!!!!!
    //have to create this variable of this controller in useEffect function to prevent rerender in that list !!!!!
    const abortCon = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCon.signal })
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
          if (err.name === "AbortError") {
            console.log("fetch abort");
          } else {
            setIsPednding(false);
            setError(err.message);
          }
        });
    }, 1000);
    return () => abortCon.abort();
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
