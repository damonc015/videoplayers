import { Suspense } from "react";
import { PlayerPageNav } from "@/components/player-page-nav";
import { MyPlayer } from "@/components/videojsplayer";

export default function VideojsPage() {
  return (
    <>
      <PlayerPageNav
        prev={{ label: "Able Player", href: "/able" }}
        next={{ label: "MediaElement.js", href: "/mediaelement" }}
      />
      <div className="flex justify-center items-center w-2/3 h-3/4 mx-auto pt-2">
        <Suspense>
          <MyPlayer />
        </Suspense>
      </div>
    </>
  );
}
