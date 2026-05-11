export function LiveGameScreen() {
  return (
    <div className="w-full h-full flex flex-col p-3">
      <h2 className="text-base font-bold text-white mb-2 text-center">Live Game</h2>

      <div className="flex-1 overflow-y-auto space-y-2 pr-1">
        {/* Live Status */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-2">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <p className="text-[10px] text-gray-400">Time</p>
              <p className="text-xs font-bold text-white">14:06</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400">Score</p>
              <p className="text-xs font-bold text-cyan-400">10 / 8</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400">Gold</p>
              <p className="text-xs font-bold text-yellow-400">+1.2k</p>
            </div>
          </div>
        </div>

        {/* CS/min Card */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-2">
          <p className="text-[10px] text-gray-400 mb-1">CS per minute</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400">Current</p>
              <p className="text-sm font-bold text-white">7.4</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400">Target</p>
              <p className="text-sm font-bold text-cyan-400">8.5</p>
            </div>
          </div>
        </div>

        {/* Recommended Next Item */}
        <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/30 backdrop-blur-sm border border-purple-500/30 rounded-lg p-2">
          <p className="text-[10px] text-gray-400 mb-1">Recommended Item</p>
          <div className="flex items-center justify-between">
            <img src="/item1.png" alt="Infinity Edge" className="w-10 h-10 rounded-lg object-cover" />
            <div className="text-right">
              <p className="text-[10px] text-gray-300">Infinity Edge</p>
              <p className="text-xs font-bold text-yellow-400">700g needed</p>
            </div>
          </div>
        </div>

        {/* Live Alert */}
        <div className="bg-gradient-to-r from-cyan-900/50 to-cyan-800/30 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-2">
          <p className="text-[10px] text-cyan-400 mb-1">Live Alert</p>
          <div className="flex items-center gap-2">
            <img src="/item2.png" alt="Luden's Tempest" className="w-8 h-8 rounded-lg object-cover" />
            <div className="flex-1">
              <p className="text-[10px] text-white">Enemy ADC bought</p>
              <p className="text-[10px] text-gray-400">Luden's Tempest</p>
            </div>
          </div>
        </div>

        {/* Objective Timers */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-2">
          <p className="text-[10px] text-gray-400 mb-2">Objective Timers</p>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-[10px] text-white">Dragon</p>
              <p className="text-xs font-bold text-cyan-400">0:48</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[10px] text-white">Baron Nashor</p>
              <p className="text-xs font-bold text-purple-400">5:23</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[10px] text-white">Herald</p>
              <p className="text-xs text-gray-500">Slain</p>
            </div>
          </div>
        </div>

        {/* Team Summary */}
        <div className="bg-gradient-to-r from-green-900/50 to-green-800/30 backdrop-blur-sm border border-green-500/30 rounded-lg p-2">
          <p className="text-[10px] text-green-400 mb-1">Team Status</p>
          <p className="text-xs text-white">Allies ahead</p>
          <p className="text-xs font-bold text-yellow-400">+1.2k gold advantage</p>
        </div>
      </div>
    </div>
  );
}
