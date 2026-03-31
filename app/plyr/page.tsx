const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function PlyrPage() {
  return (
    <div className="flex justify-center items-center w-2/3 h-full mx-auto">
      <iframe
        src={`${base}/plyr/index.html`}
        className="w-full h-full border-0"
        title="Plyr Player"
      />
    </div>
  );
}
