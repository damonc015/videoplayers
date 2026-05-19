import { PlayerPageNav } from "@/components/player-page-nav";
import { MyPlayer } from "@/components/videojsplayer";

export default function VideojsPage() {
  return (
    <>
      <PlayerPageNav
        prev={{ label: "Acornplayer", href: "/acorn" }}
        next={{ label: "MediaElement.js", href: "/mediaelement" }}
      />
      <div className="flex justify-center items-center w-2/3 h-3/4 mx-auto pt-2">
        <MyPlayer src="https://stream.dlib.nyu.edu/hls-vod/tamwag/rosie/2_ESTHER_HORNE_REEL_1_manifest.m3u8" />
      </div>
    </>
  );
}
