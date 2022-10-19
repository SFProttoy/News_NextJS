import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import axios from "axios";
import { useState } from "react";
import useGlobalState from "../hooks/useGlobalState";

export default function Home() {
  // const [data, setData] = useState("");
  const { data } = useGlobalState();
  console.log(data);
  // fetch(
  //   "https://newsdata.io/api/1/news?apikey=pub_12412fe7c1b45f7b1ff38eca61f1aaa7c8f42&q=ukraine"
  // )
  //   .then((response) => response.json())
  //   .then((json) => console.log(json.results));

  // axios
  //   .get(
  //     "https://newsdata.io/api/1/news?apikey=pub_124122093a269a0497f9d2e85e5c6ad72709d&q=ukraine"
  //   )
  //   .then(function (response) {
  //     // handle success
  //     console.log(response.data.results);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .finally(function () {
  //     // always executed
  //   });

  return (
    <div className="row">
      {data &&
        data?.map((d, index) => {
          return (
            <div class="col-sm-4" key={index}>
              <div className="card" style={{ width: "18rem" }}>
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                  <h5 className="card-title">{d.title}</h5>
                  <p className="card-text">{d.description}</p>
                  <a href={d.link} className="btn btn-primary">
                    Go to link
                  </a>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
