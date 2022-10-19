import { createSlice } from "@reduxjs/toolkit";
import useSWR from "swr";
import axios from "axios";
import FetchData, { fetchData } from "../../components/FetchData";
import useFetchData from "../../hooks/useFetchData";

// const fetcher = async () => {
//   const response = await fetch(
//     "https://newsdata.io/api/1/news?apikey=pub_124185f3ee8673b71022eabdd1233e6d4299d&q=ukraine"
//   );
//   const data = await response.json();
//   return data.results;
// };

// console.log(fetchData());

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
  },
  reducers: {
    getNews: (state, action) => {
      state.news = action.payload;
    },
  },
});

// export const FetchData = () => {
//   const { data, error } = useSWR("newsData", fetcher);

//   if (error) return "Error occured";
//   if (!data) return "No Data Found !";
//   dispatch(getNews(data));
// };

export const getNewsAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://newsdata.io/api/1/news?apikey=pub_124185f3ee8673b71022eabdd1233e6d4299d&q=ukraine"
    );
    dispatch(getNews(response.data.results));
  } catch (err) {
    throw new Error(err);
  }
};

// console.log(useFetchData())

const fetcher1 = (...args) => fetch(...args).then((res) => res.json());

export const useFetchDat = () => {
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

  console.log(data);
  dispatch(getNews(data.results[0]));

  //   console.log(data);
};

// export const fetchNews = () => {
//   axios
//     .get(
//       "https://newsdata.io/api/1/news?apikey=pub_124122093a269a0497f9d2e85e5c6ad72709d&q=ukraine"
//     )
//     .then(function (response) {
//       // handle success
//       dispatch(getNews(response.data.results));
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
//     .finally(function () {
//       // always executed
//     });
// };

export const { getNews } = newsSlice.actions;
export default newsSlice.reducer;
