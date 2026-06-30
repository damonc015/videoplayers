const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function AblePage() {
  return (
    <>
      <div className="flex-1 w-full overflow-hidden">
        <iframe
          src={`${base}/able/index.html`}
          className="w-full h-full border-0"
          title="Able Player"
          allowFullScreen
        />
      </div>
    </>
  );
}
