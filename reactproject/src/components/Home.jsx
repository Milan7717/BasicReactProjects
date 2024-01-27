import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex flex-col mx-10 text-xl font-bold  text-red-500">
          
          <Link to="/todo">ToDo list</Link>
          <Link to={'/noteapp'}>NoteApp</Link>
          <Link to={'/imagecarousel'}>ImageCarousel</Link>

        </div>
      </div>
    </>
  );
};

export default Home;
