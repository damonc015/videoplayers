import { PlayerPageNav } from "@/components/player-page-nav";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function AcornPage() {
  return (
    <>
      <PlayerPageNav
        prev={{ label: "Ableplayer", href: "/able" }}
        next={{ label: "Video.js", href: "/videojs" }}
      />
      <div className="flex justify-center items-center w-2/3 h-full mx-auto">
        <iframe
          src={`${base}/acorn/index.html`}
          className="w-full h-full border-0"
          title="Acorn Player"
        />
      </div>
    </>
  );
}
