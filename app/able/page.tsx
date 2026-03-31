export default function AblePage() {
  return (
    <div className="flex justify-center items-center w-2/3 h-full mx-auto">
        <iframe
          src="/able/index.html"
          className="w-full h-full border-0"
          title="Able Player"
        />
    </div>
  );
}
