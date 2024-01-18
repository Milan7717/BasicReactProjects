import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <div>
          <p className="p-2 text-xl font-bold pointer text-red-500">
            <Link to="/todo">ToDo list</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
