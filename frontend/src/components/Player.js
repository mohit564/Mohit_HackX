import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./Player.module.css";

import Loading from "./Loading";
import ClapprComponent from "./ClapprComponent";
import { fetchData } from "../utils/fetchData";

const URL = process.env.REACT_APP_BACKEND_URL;

const Player = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [channel, setChannel] = useState({
    name: "",
    image: "",
    source: "",
  });
  const { channelId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    fetchData(`${URL}/${channelId}`)
      .then((data) => {
        setChannel(data);
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
        <h2 className="mb-6 text-2xl text-center">{channel.name}</h2>
        <ClapprComponent id={"video"} source={channel.source} />
      </section>
    </main>
  );
};

export default Player;
