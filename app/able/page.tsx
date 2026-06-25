import { PlayerPageNav } from "@/components/player-page-nav";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function AblePage() {
  return (
    <>
      <PlayerPageNav
        next={{ label: "Video.js", href: "/videojs" }}
      />
      <div className="w-2/3 mx-auto py-8">
        <iframe
          src={`${base}/able/index.html`}
          className="w-full border-0"
          style={{ height: "600px" }}
          title="Able Player"
          allowFullScreen
        />
      </div>
    </>
  );
}
