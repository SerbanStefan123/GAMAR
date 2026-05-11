import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { Onboarding } from './components/screens/Onboarding';
import { Profile } from './components/screens/Profile';
import { LiveGame } from './components/screens/LiveGame';
import { Build } from './components/screens/Build';
import { PostGame } from './components/screens/PostGame';
import { PlayerDetail } from './components/screens/PlayerDetail';
import { BottomNav } from './components/BottomNav';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="relative w-[390px] h-[844px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-[40px] overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTAwLDIwMCwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

          <div className="relative h-full flex flex-col">
            <Routes>
              <Route path="/" element={<Onboarding />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/live" element={<LiveGame />} />
              <Route path="/build" element={<Build />} />
              <Route path="/charts" element={<PostGame />} />
              <Route path="/player/:playerId" element={<PlayerDetail />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            <BottomNav />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}