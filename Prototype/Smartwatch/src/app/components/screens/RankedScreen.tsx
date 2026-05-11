export function RankedScreen() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <h2 className="text-lg font-bold text-white mb-4">Ranked</h2>

      <div className="w-full space-y-3">
        {/* Flex Rank */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/rank1.png" alt="Rank" className="w-10 h-10 rounded-lg object-cover" />
              <div>
                <p className="text-xs text-gray-400">Flex</p>
                <p className="text-sm font-bold text-yellow-400">Gold I</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400">LP</p>
              <p className="text-sm font-bold text-white">65</p>
            </div>
          </div>
        </div>

        {/* Solo/Duo Rank */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-orange-700/30 rounded-xl p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/rank1.png" alt="Rank" className="w-10 h-10 rounded-lg object-cover" />
              <div>
                <p className="text-xs text-gray-400">Solo/Duo</p>
                <p className="text-sm font-bold text-orange-400">Bronze IV</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400">LP</p>
              <p className="text-sm font-bold text-white">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
