import React from "react";

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <button className="text-2xl">Mohit HackX</button>
        <button className="text-xl">TV Channels</button>
      </nav>
    </header>
  );
};

export default Navbar;
