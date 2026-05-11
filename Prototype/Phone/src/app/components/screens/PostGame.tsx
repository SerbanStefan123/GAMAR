import { useNavigate } from 'react-router';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import { Trophy, TrendingUp, CheckCircle2, AlertCircle } from 'lucide-react';

export function PostGame() {
  const navigate = useNavigate();

  const damageData = [
    { name: 'You', value: 28500, team: 'ally' },
    { name: 'Top', value: 21000, team: 'ally' },
    { name: 'Jungle', value: 18000, team: 'ally' },
    { name: 'Mid', value: 22000, team: 'ally' },
    { name: 'Sup', value: 12000, team: 'ally' },
    { name: 'E1', value: 24000, team: 'enemy' },
    { name: 'E2', value: 19000, team: 'enemy' },
    { name: 'E3', value: 20500, team: 'enemy' },
    { name: 'E4', value: 21000, team: 'enemy' },
    { name: 'E5', value: 11000, team: 'enemy' },
  ];

  const csData = [
    { min: 0, cs: 0 },
    { min: 5, cs: 42 },
    { min: 10, cs: 85 },
    { min: 15, cs: 128 },
    { min: 20, cs: 175 },
    { min: 25, cs: 215 },
    { min: 30, cs: 253 },
  ];

  const goldData = [
    { min: 0, gold: 500 },
    { min: 10, gold: 4200 },
    { min: 20, gold: 9800 },
    { min: 30, gold: 15600 },
  ];

  const players = [
    { name: 'You', champion: '/champion1.png', kda: '12/4/8', cs: 253, gold: '15.6k', dmg: '28.5k', team: 'ally' },
    { name: 'Top', champion: '/champion2.png', kda: '6/5/10', cs: 215, gold: '12.8k', dmg: '21.0k', team: 'ally' },
    { name: 'Jungle', champion: '/champion3.png', kda: '4/6/14', cs: 142, gold: '11.2k', dmg: '18.0k', team: 'ally' },
    { name: 'Mid', champion: '/champion1.png', kda: '8/3/9', cs: 238, gold: '13.5k', dmg: '22.0k', team: 'ally' },
    { name: 'Sup', champion: '/champion2.png', kda: '2/4/18', cs: 48, gold: '8.9k', dmg: '12.0k', team: 'ally' },
    { name: 'E1', champion: '/champion3.png', kda: '7/7/6', cs: 220, gold: '13.1k', dmg: '24.0k', team: 'enemy' },
    { name: 'E2', champion: '/champion1.png', kda: '5/6/8', cs: 198, gold: '11.8k', dmg: '19.0k', team: 'enemy' },
    { name: 'E3', champion: '/champion2.png', kda: '6/5/7', cs: 165, gold: '11.5k', dmg: '20.5k', team: 'enemy' },
    { name: 'E4', champion: '/champion3.png', kda: '4/8/9', cs: 225, gold: '12.3k', dmg: '21.0k', team: 'enemy' },
    { name: 'E5', champion: '/champion1.png', kda: '2/6/12', cs: 42, gold: '7.8k', dmg: '11.0k', team: 'enemy' },
  ];

  return (
    <div className="flex-1 overflow-y-auto pb-20">
      <div className="p-4 space-y-4">
        <div className="bg-gradient-to-br from-cyan-950/40 to-cyan-900/40 backdrop-blur-sm rounded-2xl p-5 border border-cyan-600/30">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="w-6 h-6 text-yellow-400" />
            <h2 className="text-xl text-white">Victory</h2>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-cyan-500 shadow-lg shadow-cyan-500/50">
              <ImageWithFallback
                src="/champion1.png"
                alt="Champion"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div>
                  <p className="text-xs text-slate-400">KDA</p>
                  <p className="text-white">12 / 4 / 8</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">CS</p>
                  <p className="text-white">253</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Duration</p>
                  <p className="text-white">31:42</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between bg-cyan-950/50 rounded-xl p-3 border border-cyan-500/20">
            <span className="text-sm text-slate-300">LP Gained</span>
            <span className="text-lg text-cyan-400">+20 LP</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-2xl p-4 border border-slate-800">
          <h3 className="text-sm text-slate-400 mb-3">Team Scoreboard</h3>
          <div className="space-y-1.5">
            {players.map((player, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 p-2 rounded-lg border ${
                  player.name === 'You'
                    ? 'bg-cyan-950/30 border-cyan-500/30'
                    : player.team === 'ally'
                    ? 'bg-slate-950/30 border-slate-800'
                    : 'bg-red-950/20 border-red-500/20'
                }`}
              >
                <div className="w-8 h-8 rounded overflow-hidden flex-shrink-0">
                  <ImageWithFallback src={player.champion} alt="Champion" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-300 truncate">{player.name}</p>
                  <p className="text-xs text-slate-500">{player.kda}</p>
                </div>
                <div className="text-xs text-slate-400 text-right">
                  <p>{player.cs} CS</p>
                  <p>{player.dmg}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-2xl p-4 border border-slate-800">
          <h3 className="text-sm text-slate-400 mb-3">Damage Dealt</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={damageData} layout="vertical">
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" tick={{ fill: '#94a3b8', fontSize: 11 }} width={40} />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {damageData.map((entry) => (
                  <Cell
                    key={`damage-${entry.name}`}
                    fill={
                      entry.name === 'You'
                        ? '#22d3ee'
                        : entry.team === 'ally'
                        ? '#3b82f6'
                        : '#ef4444'
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-2xl p-4 border border-slate-800">
          <h3 className="text-sm text-slate-400 mb-3">Gold Over Time</h3>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={goldData}>
              <XAxis dataKey="min" tick={{ fill: '#94a3b8', fontSize: 11 }} />
              <YAxis tick={{ fill: '#94a3b8', fontSize: 11 }} />
              <Line type="monotone" dataKey="gold" stroke="#eab308" strokeWidth={2} dot={{ fill: '#eab308', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-2xl p-4 border border-slate-800">
          <h3 className="text-sm text-slate-400 mb-3">CS Over Time</h3>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={csData}>
              <XAxis dataKey="min" tick={{ fill: '#94a3b8', fontSize: 11 }} />
              <YAxis tick={{ fill: '#94a3b8', fontSize: 11 }} />
              <Line type="monotone" dataKey="cs" stroke="#22d3ee" strokeWidth={2} dot={{ fill: '#22d3ee', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gradient-to-br from-purple-950/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-4 border border-purple-600/30">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-purple-400" />
            <h3 className="text-sm text-purple-300">Performance Insights</h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-slate-300">Strong laning phase</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-slate-300">High damage contribution</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
              <span className="text-slate-300">Missed 2 objective fights</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
              <span className="text-slate-300">Improve vision score</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate('/profile')}
          className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all hover:scale-[1.02] border border-cyan-400/50"
        >
          Back to Profile
        </button>
      </div>
    </div>
  );
}
