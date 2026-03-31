const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function MediaElementPage() {
  return (
    <div className="flex justify-center items-center w-1/2 h-full mx-auto">
      <iframe
        src={`${base}/mediaelement/index.html`}
        className="w-full h-full border-0"
        title="MediaElement.js Player"
      />
    </div>
  );
}
