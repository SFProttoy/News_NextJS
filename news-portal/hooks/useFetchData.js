import useSWR from "swr";

const fetcher1 = (...args) => fetch(...args).then((res) => res.json());

const useFetchData = () => {
  //   const { data, error } = useSWR("newsData", fetcher);

  //   if (error) return "Error occured";
  //   if (!data) return "No Data Found !";
  //   return data;
  const { data, error } = useSWR(
    "https://newsdata.io/api/1/news?apikey=pub_124185f3ee8673b71022eabdd1233e6d4299d&q=ukraine",
    fetcher1
  );

  if (error) return "Error occured";
  if (!data) return "No Data Found !";

  //   console.log(data);
};

export default useFetchData;
