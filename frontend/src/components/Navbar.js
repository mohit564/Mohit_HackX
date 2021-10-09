import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="text-white bg-gray-800">
      <nav className="container px-6 py-3 mx-auto">
        <Link to="/" className="text-2xl">
          Mohit HackX
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
