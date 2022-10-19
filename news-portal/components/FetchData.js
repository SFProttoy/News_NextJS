import useSWR from "swr";

const FetchData = async () => {
  const fetcher = async () => {
    const response = await fetch(
      "https://newsdata.io/api/1/news?apikey=pub_124122093a269a0497f9d2e85e5c6ad72709d&q=ukraine"
    );
    const data = await response.json();
    return data.results;
  };

  const { data, error } = useSWR("newsData", fetcher);

  if (error) return "Error occured";
  if (!data) return "No Data Found !";
  return data;
};

export default FetchData;
