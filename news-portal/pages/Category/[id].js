import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useGlobalState from "../../hooks/useGlobalState";
import { getNewsAsync } from "../../features/news/newsSlice";
import { useDispatch, useSelector } from "react-redux";

// import axios from 'axios';

const Category = () => {
  const router = useRouter();
  const { data } = useGlobalState();
  const { id } = router.query;
  const categoryData = [];

  const { news } = useSelector((state) => state.news);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsAsync());
  }, []);

  if (news) {
    for (const d of news) {
      // console.log(d.category[0]);
      if (d.category[0] === id) {
        categoryData.push(d);
      }
    }
  }
  // console.log(categoryData);

  return (
    <div className="row">
      {categoryData.map((data, index) => {
        return (
          <div class="col-sm-4" key={index}>
            <div className="card" style={{ width: "18rem" }}>
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <a href={data.link} className="btn btn-primary">
                  Go to link
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
