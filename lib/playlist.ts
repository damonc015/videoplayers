export const PLAYLIST = [
  {
    title: "Esther Horne — Reel 1",
    hlsSrc:
      "https://stream.dlib.nyu.edu/hls-vod/tamwag/rosie/2_ESTHER_HORNE_REEL_1_manifest.m3u8",
    vttSrc:
      "https://sites.dlib.nyu.edu/media/api/v0/service/fileserver/av/tamwag/rosie/2_ESTHER_HORNE/2_ESTHER_HORNE_REEL_1.precision.en.vtt",
    poster:
      "https://dlib.nyu.edu/files/av/tamwag/rosie/2_ESTHER_HORNE/2_ESTHER_HORNE_thumbnail.jpg",
  },
  {
    title: "Esther Horne — Reel 2",
    hlsSrc:
      "https://stream.dlib.nyu.edu/hls-vod/tamwag/rosie/2_ESTHER_HORNE_REEL_2_manifest.m3u8",
    vttSrc:
      "https://sites.dlib.nyu.edu/media/api/v0/service/fileserver/av/tamwag/rosie/2_ESTHER_HORNE/2_ESTHER_HORNE_REEL_2.precision.en.vtt",
    poster:
      "https://dlib.nyu.edu/files/av/tamwag/rosie/2_ESTHER_HORNE/2_ESTHER_HORNE_thumbnail.jpg",
  },
  {
    title: "Esther Horne — Reel 3",
    hlsSrc:
      "https://stream.dlib.nyu.edu/hls-vod/tamwag/rosie/2_ESTHER_HORNE_REEL_3_manifest.m3u8",
    vttSrc:
      "https://sites.dlib.nyu.edu/media/api/v0/service/fileserver/av/tamwag/rosie/2_ESTHER_HORNE/2_ESTHER_HORNE_REEL_3.precision.en.vtt",
    poster:
      "https://dlib.nyu.edu/files/av/tamwag/rosie/2_ESTHER_HORNE/2_ESTHER_HORNE_thumbnail.jpg",
  },
] as const;

export type PlaylistItem = (typeof PLAYLIST)[number];

// ── Timestamp helpers ──────────────────────────────────────────────────────

function pad2(n: number) {
  return String(Math.floor(n)).padStart(2, "0");
}

export function formatTimeTxt(secs: number) {
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = (secs % 60).toFixed(3).padStart(6, "0");
  return `${pad2(h)}:${pad2(m)}:${s}`;
}

function parseTimestamp(ts: string) {
  const parts = ts.trim().split(":");
  if (parts.length === 3)
    return parseFloat(parts[0]) * 3600 + parseFloat(parts[1]) * 60 + parseFloat(parts[2]);
  if (parts.length === 2) return parseFloat(parts[0]) * 60 + parseFloat(parts[1]);
  return 0;
}

// ── VTT parsing ────────────────────────────────────────────────────────────

export function parseVttCues(text: string): { start: number; text: string }[] {
  const cues: { start: number; text: string }[] = [];
  for (const block of text.split(/\n{2,}/)) {
    const lines = block.trim().split("\n");
    const tsIdx = lines.findIndex((l) => l.includes("-->"));
    if (tsIdx < 0) continue;
    const start = parseTimestamp(lines[tsIdx].split("-->")[0]);
    const cueText = lines
      .slice(tsIdx + 1)
      .join(" ")
      .replace(/<[^>]+>/g, "")
      .trim();
    if (cueText) cues.push({ start, text: cueText });
  }
  return cues;
}

export function buildTranscriptText(cues: { start: number; text: string }[]) {
  const groups: { speaker: string | null; time: number; text: string }[] = [];
  let current: (typeof groups)[0] | null = null;
  for (const cue of cues) {
    const raw = cue.text.replace(/\n\s*/g, " ").trim();
    if (!raw) continue;
    const m = raw.match(/^(Speaker \d+):\s*/);
    if (m) {
      current = { speaker: m[1], time: cue.start, text: raw.slice(m[0].length) };
      groups.push(current);
    } else if (current) {
      current.text += (current.text ? " " : "") + raw;
    } else {
      current = { speaker: null, time: cue.start, text: raw };
      groups.push(current);
    }
  }
  return (
    groups
      .filter((g) => g.text)
      .map((g) => (g.speaker ? `${g.speaker} ` : "") + formatTimeTxt(g.time) + "\n" + g.text)
      .join("\n\n") + "\n"
  );
}

// ── Actions ────────────────────────────────────────────────────────────────

export function openTranscriptTab(vttUrl: string) {
  fetch(vttUrl)
    .then((r) => r.text())
    .then((text) => {
      const blob = new Blob([buildTranscriptText(parseVttCues(text))], { type: "text/plain" });
      window.open(URL.createObjectURL(blob), "_blank");
    })
    .catch((e) => console.error("Transcript fetch failed:", e));
}

export function navigateTo(index: number) {
  const p = new URLSearchParams(location.search);
  p.set("reel", String(index));
  location.href = location.pathname + "?" + p.toString();
}

export function currentReelIndex(): number {
  const raw = parseInt(new URLSearchParams(location.search).get("reel") ?? "0");
  return Math.max(0, Math.min(PLAYLIST.length - 1, isNaN(raw) ? 0 : raw));
}
