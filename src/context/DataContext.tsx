import { useEffect } from "react";



const baseURL = "https://restcountries.com/v3.1/all";

export const DataContext = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(baseURL);
        if (response.ok) {
          const jsonResponse = await response.json();
          console.log(jsonResponse);
        }
        throw new Error("Request failed!");
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return <div>DataContext</div>;
};
