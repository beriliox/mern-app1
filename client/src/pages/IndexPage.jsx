import React from "react";
import { Link } from "react-router-dom";
const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to coasters MERN</h1>
      <hr />
      <Link to="/coasters">View Coasters</Link>
    </main>
  );
};

export default IndexPage;
