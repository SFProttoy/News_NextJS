import { useEffect, useState } from "react";
import axios from "axios";
const useTakeValues = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://newsdata.io/api/1/news?apikey=pub_124185f3ee8673b71022eabdd1233e6d4299d&q=ukraine"
      )
      .then(function (response) {
        // handle success
        setData(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  //   useEffect(() => {
  //     fetch(
  //       "https://newsdata.io/api/1/news?apikey=pub_124122093a269a0497f9d2e85e5c6ad72709d&q=ukraine"
  //     )
  //       .then((response) => response.json())
  //       .then((json) => setData(json.results));
  //   }, []);

  return {
    data,
    setData,
  };
};

export default useTakeValues;
