export function WinrateSlider() {
  return (
    <div className="flex justify-center py-4">
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold mt-6 mb-2 flex items-center gap-2">
          <span>🏆 Estimated Win Rate</span>
          <span>79%</span>
        </h2>
        <div className="w-full h-1 bg-red-400 rounded">
          <div
            className="h-full bg-green-500 rounded"
            style={{
              width: "79%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
