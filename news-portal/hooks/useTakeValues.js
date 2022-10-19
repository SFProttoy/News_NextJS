import { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
const useTakeValues = () => {
  // const [news, setNews] = useState("");

  const fetcher = async () => {
    // const response = await fetch(
    //   "https://newsdata.io/api/1/news?apikey=pub_124122093a269a0497f9d2e85e5c6ad72709d&q=ukraine"
    // );
    // const response = await fetch(
    //   "https://jsonplaceholder.typicode.com/comments"
    // );
    // const data = await response.json();
    // return data.results;
  };

  const fetcher1 = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    "https://newsdata.io/api/1/news?apikey=pub_124185f3ee8673b71022eabdd1233e6d4299d&q=ukraine",
    fetcher1
  );

  if (error) return "Error occured";
  if (!data) return "No Data Found !";

  console.log(data.results);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://newsdata.io/api/1/news?apikey=pub_124185f3ee8673b71022eabdd1233e6d4299d&q=ukraine"
  //     )
  //     .then(function (response) {
  //       // handle success
  //       setNews(response.data.results);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .finally(function () {
  //       // always executed
  //     });
  // }, []);

  //   useEffect(() => {
  //     fetch(
  //       "https://newsdata.io/api/1/news?apikey=pub_124122093a269a0497f9d2e85e5c6ad72709d&q=ukraine"
  //     )
  //       .then((response) => response.json())
  //       .then((json) => setData(json.results));
  //   }, []);

  return {
    data,
  };
};

export default useTakeValues;
