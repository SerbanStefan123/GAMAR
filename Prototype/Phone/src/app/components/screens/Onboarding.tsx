import { useNavigate } from 'react-router';

export function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-8 pb-20">
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10 text-center mb-12">
        <div className="mb-6">
          <h1 className="text-7xl font-black bg-gradient-to-r from-cyan-400 via-yellow-300 to-purple-500 bg-clip-text text-transparent tracking-tight mb-4 drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
            GAMAR
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
        </div>

        <p className="text-slate-300 text-lg">
          Your live League of Legends companion
        </p>
      </div>

      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg viewBox="0 0 390 844" className="w-full h-full">
          <path d="M50,200 L150,100 L250,150 L350,50" stroke="currentColor" strokeWidth="2" fill="none" className="text-cyan-500" />
          <path d="M40,400 L140,300 L240,350 L340,250" stroke="currentColor" strokeWidth="2" fill="none" className="text-purple-500" />
          <path d="M60,600 L160,500 L260,550 L360,450" stroke="currentColor" strokeWidth="2" fill="none" className="text-yellow-400" />
          <circle cx="195" cy="422" r="100" stroke="currentColor" strokeWidth="2" fill="none" className="text-cyan-500" />
          <circle cx="195" cy="422" r="60" stroke="currentColor" strokeWidth="2" fill="none" className="text-purple-500" />
        </svg>
      </div>

      <div className="space-y-4 w-full max-w-xs relative z-10">
        <button
          onClick={() => navigate('/profile')}
          className="w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all hover:scale-105 border border-cyan-400/50"
        >
          Open Dashboard
        </button>

        <button className="w-full py-4 px-6 bg-slate-800/80 backdrop-blur-sm text-slate-200 rounded-xl border border-slate-700 hover:border-purple-500/50 hover:bg-slate-700/80 transition-all">
          Connect Riot Account
        </button>
      </div>

      <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-2 opacity-50">
        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
        <div className="w-2 h-2 rounded-full bg-slate-600"></div>
        <div className="w-2 h-2 rounded-full bg-slate-600"></div>
      </div>
    </div>
  );
}
