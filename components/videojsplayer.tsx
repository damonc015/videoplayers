"use client";

import "@videojs/react/video/skin.css";
import { createPlayer } from "@videojs/react";
import { Video, videoFeatures } from "@videojs/react/video";
import { VideoSkin } from "@videojs/react/video/skin";
import { useContainer, useMedia } from "@videojs/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { PLAYLIST, navigateTo, openTranscriptTab } from "@/lib/playlist";

const Player = createPlayer({ features: videoFeatures });

// SVG paths reused across both buttons
const PREV_PATH = "M5 17.5v-15h2.5v6.875l6.25-6.25v13.75l-6.25-6.25v6.875z";
const NEXT_PATH = "M15 2.5v15h-2.5v-6.875l-6.25 6.25v-13.75l6.25 6.25v-6.875z";
const TRANSCRIPT_PATH =
  "M0 19.107v-17.857q0-0.446 0.313-0.759t0.759-0.313h8.929v6.071q0 0.446 0.313 0.759t0.759 0.313h6.071v11.786q0 0.446-0.313 0.759t-0.759 0.312h-15q-0.446 0-0.759-0.313t-0.313-0.759zM4.286 15.536q0 0.156 0.1 0.257t0.257 0.1h7.857q0.156 0 0.257-0.1t0.1-0.257v-0.714q0-0.156-0.1-0.257t-0.257-0.1h-7.857q-0.156 0-0.257 0.1t-0.1 0.257v0.714zM4.286 12.679q0 0.156 0.1 0.257t0.257 0.1h7.857q0.156 0 0.257-0.1t0.1-0.257v-0.714q0-0.156-0.1-0.257t-0.257-0.1h-7.857q-0.156 0-0.257 0.1t-0.1 0.257v0.714zM4.286 9.821q0 0.156 0.1 0.257t0.257 0.1h7.857q0.156 0 0.257-0.1t0.1-0.257v-0.714q0-0.156-0.1-0.257t-0.257-0.1h-7.857q-0.156 0-0.257 0.1t-0.1 0.257v0.714zM11.429 5.893v-5.268q0.246 0.156 0.402 0.313l4.554 4.554q0.156 0.156 0.313 0.402h-5.268z";

// Playlist end-card overlay -- 
// Rendered inside VideoSkin (position: absolute over the video).

function PlaylistOverlay({ currentIndex }: { currentIndex: number }) {
  const media = useMedia();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!media) return;
    const handler = () => {
      setVisible(media.duration > 0 && media.currentTime >= media.duration - 20);
    };
    media.addEventListener("timeupdate", handler);
    return () => media.removeEventListener("timeupdate", handler);
  }, [media]);

  const upcoming = PLAYLIST.slice(currentIndex + 1);
  if (!upcoming.length) return null;

  return (
    <div
      style={{
        position: "absolute",
        bottom: 60,
        right: 10,
        display: "flex",
        gap: 10,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.5s ease",
        zIndex: 200,
      }}
    >
      {upcoming.map((item, i) => {
        const idx = currentIndex + 1 + i;
        return (
          <div
            key={idx}
            onClick={() => navigateTo(idx)}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5, cursor: "pointer" }}
          >
            <div
              style={{
                width: 90, height: 90, borderRadius: "50%", overflow: "hidden",
                border: "2px solid rgba(255,255,255,0.45)",
                background: "rgba(0,0,0,0.35)", backdropFilter: "blur(3px)",
                transition: "border-color 0.2s, transform 0.2s",
              }}
            >
              <img src={item.poster} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }} />
            </div>
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.8)", textAlign: "center", maxWidth: 90, lineHeight: 1.3, textShadow: "0 1px 4px rgba(0,0,0,0.9)" }}>
              {item.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// Playlist and transcript buttons -- 
// Imported directly into .media-controls so they sit inline with the
// native Video.js buttons and inherit all existing button CSS.

function IconBtn({
  label,
  path,
  onClick,
  style,
  "aria-haspopup": ariaHaspopup,
  "aria-expanded": ariaExpanded,
}: {
  label: string;
  path: string;
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
  "aria-haspopup"?: React.AriaAttributes["aria-haspopup"];
  "aria-expanded"?: boolean;
}) {
  return (
    <button
      type="button"
      className="media-button media-button--subtle media-button--icon"
      aria-label={label}
      aria-haspopup={ariaHaspopup}
      aria-expanded={ariaExpanded}
      onClick={onClick}
      style={style}
    >
      <svg focusable="false" aria-hidden="true" viewBox="0 0 20 20" width="18" height="18" fill="currentColor">
        <path d={path} />
      </svg>
    </button>
  );
}

function PlaylistButtons({ currentIndex }: { currentIndex: number }) {
  const [transcriptOpen, setTranscriptOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const vttUrl = PLAYLIST[currentIndex].vttSrc;

  useEffect(() => {
    if (!transcriptOpen) return;
    const handler = (e: MouseEvent) => {
      if (!popupRef.current?.contains(e.target as Node)) setTranscriptOpen(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [transcriptOpen]);

  const gold = "#f5c400";

  return (
    <>
      {/* Visual separator */}
      <div aria-hidden="true" style={{ width: 1, background: "currentColor", opacity: 0.2, alignSelf: "stretch", margin: "6px 2px", flexShrink: 0 }} />

      {currentIndex > 0 && (
        <IconBtn label="Previous reel" path={PREV_PATH} style={{ color: gold }} onClick={() => navigateTo(currentIndex - 1)} />
      )}
      {currentIndex < PLAYLIST.length - 1 && (
        <IconBtn label="Next reel" path={NEXT_PATH} style={{ color: gold }} onClick={() => navigateTo(currentIndex + 1)} />
      )}

      {/* Transcript button + popup — wrapper is the positioning anchor */}
      <div ref={popupRef} style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <IconBtn
          label="View transcript"
          path={TRANSCRIPT_PATH}
          aria-haspopup="menu"
          aria-expanded={transcriptOpen}
          onClick={(e) => { e?.stopPropagation(); setTranscriptOpen((o) => !o); }}
        />
        {transcriptOpen && (
          <div
            role="menu"
            style={{
              position: "absolute",
              bottom: "calc(100% + 8px)",
              right: 0,
              background: "rgba(28,28,28,0.95)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 4,
              minWidth: 140,
              zIndex: 500,
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "7px 14px 5px", fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#888", borderBottom: "1px solid rgba(255,255,255,0.08)", userSelect: "none" }}>
              Languages
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              <li
                role="menuitem"
                style={{ padding: "6px 14px", fontSize: 13, color: "#fff", cursor: "pointer" }}
                onClick={(e) => { e.stopPropagation(); setTranscriptOpen(false); openTranscriptTab(vttUrl); }}
              >
                English
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

// Waits for .media-controls to appear, then portals PlaylistButtons into it.
function ControlsPortal({ currentIndex }: { currentIndex: number }) {
  const container = useContainer();
  const [controlsEl, setControlsEl] = useState<Element | null>(null);

  useEffect(() => {
    if (!container) return;
    const tryFind = () => {
      const el = container.querySelector(".media-controls");
      if (el) { setControlsEl(el); return true; }
      return false;
    };
    if (tryFind()) return;
    const obs = new MutationObserver(() => { if (tryFind()) obs.disconnect(); });
    obs.observe(container, { childList: true, subtree: true });
    return () => obs.disconnect();
  }, [container]);

  if (!controlsEl) return null;
  return createPortal(<PlaylistButtons currentIndex={currentIndex} />, controlsEl);
}

function ClickToPlay() {
  const media = useMedia();
  return (
    <div
      style={{ position: "absolute", inset: 0, zIndex: 1, cursor: "pointer" }}
      onClick={() => {
        if (!media) return;
        media.paused ? media.play() : media.pause();
      }}
    />
  );
}

// ── Main component ─────────────────────────────────────────────────

export function MyPlayer() {
  const searchParams = useSearchParams();
  const raw = parseInt(searchParams.get("reel") ?? "0");
  const currentIndex = Math.max(0, Math.min(PLAYLIST.length - 1, isNaN(raw) ? 0 : raw));
  const item = PLAYLIST[currentIndex];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Player.Provider>
        <VideoSkin style={{ "--media-border-radius": "0px" } as React.CSSProperties}>
          <Video src={item.hlsSrc} playsInline poster={item.poster}>
            <track kind="captions" src={item.vttSrc} srcLang="en" label="English" />
          </Video>
          <ClickToPlay />
          <PlaylistOverlay currentIndex={currentIndex} />
          <ControlsPortal currentIndex={currentIndex} />
        </VideoSkin>
      </Player.Provider>
    </div>
  );
}
