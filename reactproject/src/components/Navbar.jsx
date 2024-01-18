import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/">
        <p className="text-blue-500 text-xl font-semibold my-2 mx-10 p-2">Home</p>
      </Link>
    </>
  );
};

export default Navbar;
