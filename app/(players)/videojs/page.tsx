import { Suspense } from "react";
import { MyPlayer } from "@/components/videojsplayer";

export default function VideojsPage() {
  return (
    <>
      <div className="flex-1 w-full h-full overflow-hidden">
        <Suspense>
          <MyPlayer />
        </Suspense>
      </div>
    </>
  );
}
