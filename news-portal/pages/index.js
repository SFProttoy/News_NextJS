import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from 'axios';
import { useState } from "react";
export default function Home() {
  const [data, setData] = useState('')
  // fetch(
  //   "https://newsdata.io/api/1/news?apikey=pub_123712a58ebae2b408ad4c9e89649c1c83df0&q=ukraine"
  // )
  //   .then((response) => response.json())
  //   .then((json) => console.log(json.results));

  axios.get('https://newsdata.io/api/1/news?apikey=pub_123866b10f926081c444ac2c3dcd8a5a352d0&q=ukraine')
  .then(function (response) {
    // handle success
    setData(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

  

  return (
    <div>
      <h1 className="text-primary">hello</h1>
    </div>
  );
}
