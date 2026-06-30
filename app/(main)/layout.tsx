import { PlayerNav } from "@/components/player-nav";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col overflow-y-auto h-full">
      <PlayerNav />
      {children}
    </div>
  );
}
