import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Player from "./components/Player";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/channels" component={HomePage} exact />
        <Route path="/channels/:channelId" component={Player} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
