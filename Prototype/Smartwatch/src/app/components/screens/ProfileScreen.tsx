export function ProfileScreen() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-3">
        {/* Avatar */}
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-cyan-400 shadow-lg shadow-cyan-500/50">
            <img
              src="/champion1.png"
              alt="GamarPlayer"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Level Badge */}
          <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-lg shadow-lg">
            142
          </div>
        </div>

        {/* Username */}
        <h1 className="text-xl font-bold text-white">GamarPlayer</h1>

        {/* Role */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl px-4 py-2">
          <p className="text-xs text-gray-300">Main role:</p>
          <div className="flex gap-2 mt-1">
            <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded">ADC</span>
            <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded">SUP</span>
          </div>
        </div>
      </div>
    </div>
  );
}
