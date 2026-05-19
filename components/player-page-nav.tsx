import Link from "next/link";

interface PlayerPageNavProps {
  prev?: { label: string; href: string };
  next?: { label: string; href: string };
}

export function PlayerPageNav({ prev, next }: PlayerPageNavProps) {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-white border-b dark:bg-zinc-900 dark:border-zinc-700">
      {prev ? (
        <Link
          href={prev.href}
          className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          ← {prev.label}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={next.href}
          className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          {next.label} →
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
