"use client";

import "@videojs/react/video/skin.css";
import { createPlayer } from "@videojs/react";
import { Video, videoFeatures } from "@videojs/react/video";
import { VideoSkin } from "@videojs/react/video/skin";

const Player = createPlayer({ features: videoFeatures });

interface MyPlayerProps {
  src: string;
}

export const MyPlayer = ({ src }: MyPlayerProps) => {
  return (
    <Player.Provider>
      <VideoSkin>
        <Video src={src} playsInline>
          <track
            kind="captions"
            src="/sample.vtt"
            srcLang="en"
            label="English"
          />
        </Video>
      </VideoSkin>
    </Player.Provider>
  );
};
