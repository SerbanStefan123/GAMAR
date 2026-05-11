import { useNavigate } from 'react-router';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft, TrendingUp } from 'lucide-react';

export function PlayerDetail() {
  const navigate = useNavigate();

  const recentForm = [
    { result: 'W', color: 'cyan' },
    { result: 'L', color: 'red' },
    { result: 'W', color: 'cyan' },
    { result: 'W', color: 'cyan' },
    { result: 'L', color: 'red' },
  ];

  return (
    <div className="flex-1 overflow-y-auto pb-20">
      <div className="p-4 space-y-4">
        <button
          onClick={() => navigate('/profile')}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Profile</span>
        </button>

        <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-2xl p-5 border border-slate-800">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-purple-500 shadow-lg shadow-purple-500/50">
              <ImageWithFallback
                src="/champion2.png"
                alt="Champion"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h2 className="text-xl text-white mb-1">User 1</h2>
              <div className="flex gap-2 text-sm">
                <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded border border-purple-500/30">
                  Jungle
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-800">
              <p className="text-xs text-slate-400 mb-1">Rank</p>
              <p className="text-sm text-slate-200">Silver II</p>
            </div>
            <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-800">
              <p className="text-xs text-slate-400 mb-1">Winrate</p>
              <p className="text-sm text-cyan-400">51%</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-2xl p-5 border border-slate-800">
          <h3 className="text-sm text-slate-400 mb-3">Most Played Champions</h3>
          <div className="flex gap-3">
            {['/champion1.png', '/champion2.png', '/champion3.png'].map((champ, i) => (
              <div key={i} className="flex-1">
                <div className="aspect-square rounded-xl overflow-hidden border-2 border-slate-700 hover:border-purple-500 transition-all mb-2">
                  <ImageWithFallback
                    src={champ}
                    alt="Champion"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-slate-400 text-center">
                  {[45, 38, 32][i]} games
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-2xl p-5 border border-slate-800">
          <h3 className="text-sm text-slate-400 mb-3">Recent Form</h3>
          <div className="flex gap-2 justify-center">
            {recentForm.map((form, i) => (
              <div
                key={i}
                className={`w-12 h-12 rounded-lg flex items-center justify-center border ${
                  form.color === 'cyan'
                    ? 'bg-cyan-950/30 border-cyan-500/30 text-cyan-400'
                    : 'bg-red-950/30 border-red-500/30 text-red-400'
                }`}
              >
                {form.result}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-950/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-5 border border-purple-600/30">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-4 h-4 text-purple-400" />
            <h3 className="text-sm text-purple-300">Performance Stats</h3>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300">Avg KDA</span>
              <span className="text-sm text-white">3.2</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300">Avg CS/min</span>
              <span className="text-sm text-white">6.8</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300">Vision Score</span>
              <span className="text-sm text-white">42</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300">Kill Participation</span>
              <span className="text-sm text-purple-400">68%</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <button className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all hover:scale-[1.02] border border-cyan-400/50">
            Compare with me
          </button>

          <button
            onClick={() => navigate('/profile')}
            className="w-full py-3 px-6 bg-slate-800/80 backdrop-blur-sm text-slate-200 rounded-xl border border-slate-700 hover:border-purple-500/50 hover:bg-slate-700/80 transition-all"
          >
            Back to Profile
          </button>
        </div>
      </div>
    </div>
  );
}
