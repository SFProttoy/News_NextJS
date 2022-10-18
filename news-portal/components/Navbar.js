import React, { useEffect, useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [data, setData] = useState("");
  let categories = [];

  useEffect(() => {
    fetch(
      "https://newsdata.io/api/1/news?apikey=pub_123866b10f926081c444ac2c3dcd8a5a352d0&q=ukraine"
    )
      .then((response) => response.json())
      .then((json) => setData(json.results));
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="#"></a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {data &&
                data?.map((item, index) => {
                  if (categories.indexOf(item.category[0]) === -1) {
                    categories.push(item.category[0]);
                  }                 
                })}
                {
                  categories.map((c,i) => (
                    (
                      
                      <li className="nav-item" key={i}>
                        <Link href={`/Category/${c}`}>
                    <a  className="nav-link active"
                          aria-current="page">{c}</a>
                  </Link>
                     
                      </li>
                    )
                  ))
                }
           
              
              
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
