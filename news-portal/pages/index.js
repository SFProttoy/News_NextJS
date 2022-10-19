import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import axios from "axios";
import { useEffect, useState } from "react";
import useGlobalState from "../hooks/useGlobalState";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDat,
  fetchNews,
  getNewsAsync,
  useFetchDat,
} from "../features/news/newsSlice";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export default function Home() {
  // const [data, setData] = useState("");
  const { data } = useGlobalState();

  const { news } = useSelector((state) => state.news);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(useFetchDat());
  // }, []);

  const dat = dispatch(useFetchDat());

  console.log(dat);

  // console.log(news);

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
    // <div className="row">
    //   {news &&
    //     news?.map((d, index) => {
    //       return (
    //         <div class="col-sm-4" key={index}>
    //           <div className="card" style={{ width: "18rem" }}>
    //             {/* <img src="..." className="card-img-top" alt="..." /> */}
    //             <div className="card-body">
    //               <h5 className="card-title">{d.title}</h5>
    //               <p className="card-text">{d.description}</p>
    //               <a href={d.link} className="btn btn-primary">
    //                 Go to link
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     })}
    // </div>
    <Box sx={{ mt: 5 }}>
      <Grid container spacing={3}>
        {news &&
          news?.map((n, index) => {
            return (
              <Grid item md={4} key={index}>
                <Card sx={{ minWidth: 275 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {n.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {n.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
}
