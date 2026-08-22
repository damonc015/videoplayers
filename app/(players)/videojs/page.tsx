const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function VideojsPage() {
  return (
    <>
      <div className="flex-1 w-full overflow-hidden">
        <iframe
          src={`${base}/videojs/index.html`}
          className="w-full h-full border-0"
          title="Video.js Player"
          allowFullScreen
        />
      </div>
    </>
  );
}
