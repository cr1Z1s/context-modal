import { Link } from "react-router-dom";
import React from "react";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>you can navigate to these links:</p>
      <ul>
        <li>
          <Link to={"/page-one"}>page one</Link>
        </li>
        <li>
          <Link to={"/page-two"}>page two</Link>
        </li>
        <li>
          <Link to={"/page-three"}>page three</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
