import React from "react";
import { Link } from "react-router-dom";
import Main from "../layouts/Main";

const Home = () => {
  return (
    <Main>
      <div className=" container mt-3">
          <div className="bg-light p-5 mt-4 rounded-3">
            <h1>Welcome to Rizwan Traders POS</h1>
            <p> Rizwan Traders – Fresh, Affordable</p>
            <p>we bring you the freshest produce, pantry staples, and household essentials—all at unbeatable prices. Whether you're stocking up for the week or grabbing last-minute ingredients, we’ve got you covered. </p>
            <Link to='/pos' className="btn btn-primary">Clik here to sell products </Link>
          </div>
        </div>
    </Main>
  );
};

export default Home;
