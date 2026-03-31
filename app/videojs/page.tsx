import { MyPlayer } from "@/components/videojsplayer";

export default function VideojsPage() {
  return (
    <div className="flex justify-center items-center w-2/3 h-3/4 mx-auto pt-2">
      <MyPlayer src="/sample.mp4" />
    </div>
  );
};
