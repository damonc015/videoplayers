import { MyPlayer } from "@/components/videojsplayer";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function VideojsPage() {
  return (
    <div className="flex justify-center items-center w-2/3 h-3/4 mx-auto pt-2">
      <MyPlayer src={`${base}/sample.mp4`} />
    </div>
  );
}
