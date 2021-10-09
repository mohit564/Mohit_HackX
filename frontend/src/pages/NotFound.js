import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen min-h-screen space-y-5 text-white bg-gray-900">
      <h1 className="font-bold text-blue-500 text-9xl">404</h1>
      <p className="text-2xl text-gray-400">
        The requested page was not found.
      </p>
      <Link
        to="/"
        className="px-6 py-2 text-xl align-middle bg-blue-500 rounded hover:bg-blue-600"
      >
        <i className="mr-2 fa-solid fa-house" />
        Home
      </Link>
    </main>
  );
};

export default NotFound;
