import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import "./CoastersDetails.css";

const CoastersDetails = () => {
  const { coaster_id } = useParams();
  const [coaster, setCoaster] = useState([]);

  const loadCoasterDetail = () => {
    fetch(`http://localhost:9000/api/v1/coaster/${coaster_id}`)
      .then((res) => res.json())
      .then((data) => {
        setCoaster(data);
      });
  };
  loadCoasterDetail();
  return (
    <main className="coaster-detail">
      <h1>Coaster detail</h1>
      <h3>{coaster_id}</h3>
      <h3>{coaster.title}</h3>
      <img src={coaster.imageUrl} alt={coaster.title} />
      <p>{coaster.description}</p>
      <h3>Specs</h3>
      <ul>
        <li>Longitude: {coaster.length}</li>
        <li>Investment: {coaster.inversions}</li>
      </ul>
      <Link to="/coasters">Coasters</Link>
      <hr />
    </main>
  );
};

export default CoastersDetails;
