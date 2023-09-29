import { useState, useEffect } from "react";

export const asyncUseApi = () => {
  const [dataApi, setDataApi] = useState([]);

  const rymApiCall = async () => {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character"
      );

      const {results} = await response.json()
      console.log(results);
      setDataApi(results);
    } catch (error) {
      console.log(error);
    }
  };

  // rymApiCall();

  useEffect(() => {
    // fetch("https://rickandmortyapi.com/api/character")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setDataApi(data.results);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
    rymApiCall();
  }, []);

  return dataApi;
};
