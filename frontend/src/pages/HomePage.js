import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { fetchData } from "../utils/fetchData";
import Loading from "../components/Loading";

const URL = process.env.REACT_APP_BACKEND_URL;

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetchData(URL)
      .then((data) => {
        setChannels(data);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="min-h-screen text-white bg-gray-900 ">
      <section className="container px-6 py-6 mx-auto">
        <h2 className="mb-10 text-2xl text-center">TV Channels</h2>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 md:grid-cols-3">
          {channels.map((channel) => {
            return (
              <Link
                key={channel._id}
                to={`channels/${channel._id}`}
                className="rounded hover:bg-gray-800"
              >
                <img
                  className="object-cover object-center mx-auto"
                  src={channel.image}
                  alt={"Channel" + channel.name}
                  loading="lazy"
                />
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
