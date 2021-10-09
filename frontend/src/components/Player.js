import React, { useEffect } from "react";
import Clappr from "clappr";
import LevelSelector from "@guzzj/clappr-level-selector-plugin";
import ClapprPIPPlugin from "@guzzj/clappr-pip-plugin";
import DashShakaPlayback from "dash-shaka-playback";

import "./Player.module.css";

const Player = () => {
  useEffect(() => {
    const source =
      "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8";

    let player = new Clappr.Player({
      parentId: "#player",
      source: source,
      width: "100%",
      mimeType: "application/x-mpegURL",
      plugins: [LevelSelector, ClapprPIPPlugin, DashShakaPlayback],
      autoPlay: true,
      crossOrigin: "anonymous",
      shakaConfiguration: {
        manifest: { retryParameters: { maxAttempts: Infinity } },
        streaming: {
          lowLatencyMode: true,
          inaccurateManifestTolerance: 0,
          rebufferingGoal: 0.01,
          retryParameters: { maxAttempts: Infinity },
        },
        drm: { retryParameters: { maxAttempts: Infinity } },
      },
    });

    return () => {
      player.destroy();
      player = null;
    };
  }, []);
  return (
    <main className="min-h-screen bg-gray-900 text-white ">
      <section className="container mx-auto px-6 py-6">
        <h2 className="text-2xl text-center mb-6">Sample Video</h2>
        <div id="player" className="w-full h-full mx-auto"></div>
      </section>
    </main>
  );
};

export default Player;
