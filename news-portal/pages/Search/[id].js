import { useRouter } from "next/router";
import React from "react";
import useGlobalState from "../../hooks/useGlobalState";

const Search = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useGlobalState();
  const searchData = [];

  for (const d of data) {
    if (d.title.includes(id)) {
      console.log("hello", d);
      searchData.push(d);
    }
  }

  return (
    <div className="row">
      {searchData.map((data, index) => {
        return (
          <div className="col-sm-4" key={index}>
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

export default Search;
