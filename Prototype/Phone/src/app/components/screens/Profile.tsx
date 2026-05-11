import { useNavigate } from 'react-router';
import { Search, TrendingUp, TrendingDown } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Profile() {
  const navigate = useNavigate();

  const matches = [
    { result: 'WIN', mode: 'Solo/Duo', lp: '+20 LP', kda: '12/4/8', cs: 253 },
    { result: 'LOSS', mode: 'Flex', lp: '-14 LP', kda: '0/10/0', cs: 105 },
    { result: 'WIN', mode: 'Solo/Duo', lp: '+18 LP', kda: '8/2/11', cs: 221 },
  ];

  return (
    <div className="flex-1 overflow-y-auto pb-20">
      <div className="p-4 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search summoner"
            className="w-full pl-10 pr-4 py-3 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50"
          />
        </div>

        <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-2xl p-5 border border-slate-800">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-cyan-500 shadow-lg shadow-cyan-500/50">
                <ImageWithFallback
                  src="/champion1.png"
                  alt="Champion"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-slate-950 px-2 py-0.5 rounded-md text-xs">
                142
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-xl text-white mb-1">GamarPlayer</h2>
              <div className="flex gap-2 text-sm">
                <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-400 rounded border border-cyan-500/30">
                  ADC
                </span>
                <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded border border-purple-500/30">
                  Support
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mb-4">
            {['User 1', 'User 2', 'User 3'].map((user, i) => (
              <button
                key={i}
                onClick={() => navigate(`/player/${i + 1}`)}
                className="px-3 py-1.5 bg-slate-800/60 text-slate-300 rounded-lg text-xs border border-slate-700 hover:border-purple-500/50 transition-all"
              >
                {user}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-800">
              <div className="flex items-center gap-2 mb-2">
                <ImageWithFallback
                  src="/rank1.png"
                  alt="Rank"
                  className="w-8 h-8"
                />
                <div>
                  <p className="text-xs text-slate-400">Solo/Duo</p>
                  <p className="text-sm text-amber-600">Bronze IV</p>
                </div>
              </div>
              <p className="text-xs text-slate-400">0 LP</p>
            </div>

            <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-800">
              <div className="flex items-center gap-2 mb-2">
                <ImageWithFallback
                  src="/rank1.png"
                  alt="Rank"
                  className="w-8 h-8"
                />
                <div>
                  <p className="text-xs text-slate-400">Flex</p>
                  <p className="text-sm text-yellow-500">Gold I</p>
                </div>
              </div>
              <p className="text-xs text-slate-400">65 LP</p>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-800">
              <p className="text-xs text-slate-400 mb-1">Winrate</p>
              <p className="text-lg text-cyan-400">58%</p>
            </div>
            <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-800">
              <p className="text-xs text-slate-400 mb-1">Last 30 Games</p>
              <p className="text-sm text-slate-300">18W / 12L</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-2xl p-5 border border-slate-800">
          <h3 className="text-sm text-slate-400 mb-3">Current Build</h3>
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-lg bg-slate-800/60 border border-slate-700 overflow-hidden"
              >
                <ImageWithFallback
                  src={`/item${i}.png`}
                  alt="Item"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {[1, 2, 3].map((i) => (
              <div
                key={`empty-${i}`}
                className="w-10 h-10 rounded-lg bg-slate-950/60 border border-slate-800"
              ></div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-2xl p-5 border border-slate-800">
          <h3 className="text-sm text-slate-400 mb-3">Match History</h3>
          <div className="space-y-2">
            {matches.map((match, i) => (
              <button
                key={i}
                onClick={() => navigate('/charts')}
                className={`w-full p-3 rounded-xl border ${
                  match.result === 'WIN'
                    ? 'bg-cyan-950/30 border-cyan-500/30'
                    : 'bg-red-950/30 border-red-500/30'
                } hover:scale-[1.02] transition-all text-left`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {match.result === 'WIN' ? (
                      <TrendingUp className="w-4 h-4 text-cyan-400" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-400" />
                    )}
                    <span
                      className={`text-sm ${
                        match.result === 'WIN' ? 'text-cyan-400' : 'text-red-400'
                      }`}
                    >
                      {match.result}
                    </span>
                    <span className="text-xs text-slate-500">{match.mode}</span>
                  </div>
                  <span
                    className={`text-xs ${
                      match.result === 'WIN' ? 'text-cyan-400' : 'text-red-400'
                    }`}
                  >
                    {match.lp}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">{match.kda}</span>
                  <span className="text-slate-400">{match.cs} CS</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
