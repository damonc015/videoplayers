import { PlayerPageNav } from "@/components/player-page-nav";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function MediaElementPage() {
  return (
    <>
      <PlayerPageNav
        prev={{ label: "Video.js", href: "/videojs" }}
        next={{ label: "Plyr", href: "/plyr" }}
      />
      <div className="flex justify-center items-center w-1/2 h-full mx-auto">
        <iframe
          src={`${base}/mediaelement/index.html`}
          className="w-full h-full border-0"
          title="MediaElement.js Player"
        />
      </div>
    </>
  );
}
