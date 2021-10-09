import React, { useEffect } from "react";
import Clappr from "clappr";
import LevelSelector from "@guzzj/clappr-level-selector-plugin";
import ClapprPIPPlugin from "@guzzj/clappr-pip-plugin";
import DashShakaPlayback from "dash-shaka-playback";

// eslint-disable-next-line react/prop-types
const ClapprComponent = ({ id, source }) => {
  let player = "";

  useEffect(() => {
    player = new Clappr.Player({
      parentId: `#${id}`,
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
          rebufferingGoal: 6,
          retryParameters: { maxAttempts: Infinity },
        },
        drm: { retryParameters: { maxAttempts: Infinity } },
      },
    });
    return () => {
      player.destroy();
      player = "";
    };
  }, []);

  return <div id={id} className="w-full h-full mx-auto"></div>;
};

export default ClapprComponent;
