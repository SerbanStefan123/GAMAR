interface MatchDetailScreenProps {
  onBack: () => void;
}

export function MatchDetailScreen({ onBack }: MatchDetailScreenProps) {
  return (
    <div className="w-full h-full flex flex-col p-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={onBack}
          className="text-cyan-400 text-xs hover:text-cyan-300"
        >
          ← Back
        </button>
        <h2 className="text-base font-bold text-cyan-400">Victory</h2>
      </div>

      {/* Champion & Stats */}
      <div className="flex flex-col items-center space-y-2 flex-1">
        <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-cyan-400 shadow-lg shadow-cyan-500/50">
          <img src="/champion1.png" alt="Champion" className="w-full h-full object-cover" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2 w-full">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-2 text-center">
            <p className="text-[10px] text-gray-400">KDA</p>
            <p className="text-xs font-bold text-white">12/4/8</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-2 text-center">
            <p className="text-[10px] text-gray-400">CS</p>
            <p className="text-xs font-bold text-white">233</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-2 text-center">
            <p className="text-[10px] text-gray-400">LP</p>
            <p className="text-xs font-bold text-cyan-400">+20</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-2 text-center">
            <p className="text-[10px] text-gray-400">Duration</p>
            <p className="text-xs font-bold text-white">31:42</p>
          </div>
        </div>

        {/* Build */}
        <div className="w-full">
          <p className="text-[10px] text-gray-400 mb-2">Final Build</p>
          <div className="flex gap-2 justify-center">
            <img src="/item1.png" alt="Item" className="w-10 h-10 rounded-lg border border-purple-500/30 object-cover" />
            <img src="/item2.png" alt="Item" className="w-10 h-10 rounded-lg border border-purple-500/30 object-cover" />
            <img src="/item3.png" alt="Item" className="w-10 h-10 rounded-lg border border-purple-500/30 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
