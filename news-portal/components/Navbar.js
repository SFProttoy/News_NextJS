import React, { useEffect, useState } from "react";
import Link from "next/link";
import useGlobalState from "../hooks/useGlobalState";
import { useRouter } from "next/router";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const { data } = useGlobalState();
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
    router.push(`/Search/${search.replace(/ /g, "-")}`);
  };

  let categories = [];

  // useEffect(() => {
  //   fetch(
  //     "https://newsdata.io/api/1/news?apikey=pub_124122093a269a0497f9d2e85e5c6ad72709d&q=pegasus&language=en"
  //   )
  //     .then((response) => response.json())
  //     .then((json) => console.log(json.results));
  // }, []);

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
              {categories.map((c, i) => (
                <li className="nav-item" key={i}>
                  <Link href={`/Category/${c}`}>
                    <a className="nav-link active" aria-current="page">
                      {c}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <button
                onClick={handleSearch}
                className="btn btn-outline-success"
                type="submit"
              >
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
