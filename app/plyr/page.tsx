export default function PlyrPage() {
  return (
    <div className="flex justify-center items-center w-2/3 h-full mx-auto">
        <iframe
          src="/plyr/index.html"
          className="w-full h-full border-0"
          title="Plyr Player"
        />
    </div>
  );
}
