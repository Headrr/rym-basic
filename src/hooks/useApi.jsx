import { useState, useEffect } from "react";

export const UseApi = () => {
  const [dataApi, setDataApi] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setDataApi(data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return dataApi;
};
