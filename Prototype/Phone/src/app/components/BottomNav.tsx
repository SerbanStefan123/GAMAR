import { useNavigate, useLocation } from 'react-router';
import { User, Zap, Shield, BarChart3 } from 'lucide-react';

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === '/') return null;

  const tabs = [
    { path: '/profile', icon: User, label: 'Profile' },
    { path: '/live', icon: Zap, label: 'Live' },
    { path: '/build', icon: Shield, label: 'Build' },
    { path: '/charts', icon: BarChart3, label: 'Charts' },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800">
      <div className="flex items-center justify-around h-full px-4">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          const Icon = tab.icon;

          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transition-all ${
                isActive
                  ? 'text-cyan-400'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]' : ''}`} />
              <span className="text-xs">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
