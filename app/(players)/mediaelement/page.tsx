const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function MediaElementPage() {
  return (
    <>
      <div className="flex-1 w-full overflow-hidden">
        <iframe
          src={`${base}/mediaelement/index.html`}
          className="w-full h-full border-0"
          title="MediaElement.js Player"
        />
      </div>
    </>
  );
}
