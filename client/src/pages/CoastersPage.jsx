import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./CoastersPage.css";
const CoastersPage = () => {
  const [coasters, setCoasters] = useState([]);
  const loadCoasters = () => {
    fetch("http://localhost:9000/api/v1/coasters")
      .then((res) => res.json())
      .then((data) => {
        setCoasters(data);
      });
  };

  loadCoasters();

  return (
    <main>
      <div>
        <h1>Coasters</h1>
        <hr />
        {coasters.map((coaster) => {
          return (
            <Link to={`/coasters/${coaster._id}`} key={coaster._id}>
              <article className="coaster-card" key={coaster._id}>
                <h3>{coaster.title}</h3>
                <img src={coaster.imageUrl} alt={coaster.title} />
              </article>
            </Link>
          );
        })}
      </div>
      <Link style={{ margin: 10 }} to="/">
        Home
      </Link>
    </main>
  );
};

export default CoastersPage;
