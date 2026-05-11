interface MatchHistoryScreenProps {
  onMatchClick: () => void;
}

const matches = [
  { result: 'WIN', queue: 'Solo/Duo', lp: '+20 LP', kda: '12/4/8', cs: '233 CS' },
  { result: 'LOSS', queue: 'Flex', lp: '-14 LP', kda: '0/10/0', cs: '142 CS' },
  { result: 'WIN', queue: 'Solo/Duo', lp: '+18 LP', kda: '8/2/11', cs: '201 CS' },
  { result: 'WIN', queue: 'Flex', lp: '+16 LP', kda: '6/3/12', cs: '189 CS' },
  { result: 'LOSS', queue: 'Solo/Duo', lp: '-17 LP', kda: '3/8/4', cs: '156 CS' },
  { result: 'WIN', queue: 'Solo/Duo', lp: '+21 LP', kda: '14/5/9', cs: '245 CS' },
];

export function MatchHistoryScreen({ onMatchClick }: MatchHistoryScreenProps) {
  return (
    <div className="w-full h-full flex flex-col p-3">
      <h2 className="text-base font-bold text-white mb-2 text-center">Match History</h2>

      <div className="flex-1 overflow-y-auto space-y-2 pr-1">
        {matches.map((match, index) => (
          <button
            key={index}
            onClick={onMatchClick}
            className={`w-full ${
              match.result === 'WIN'
                ? 'bg-gradient-to-r from-cyan-900/50 to-cyan-800/30 border-cyan-500/30 hover:border-cyan-400/50'
                : 'bg-gradient-to-r from-red-900/50 to-red-800/30 border-red-500/30 hover:border-red-400/50'
            } backdrop-blur-sm border rounded-lg p-2.5 transition-all`}
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <p className={`text-xs font-bold ${match.result === 'WIN' ? 'text-cyan-400' : 'text-red-400'}`}>
                  {match.result}
                </p>
                <p className="text-[10px] text-gray-400">{match.queue}</p>
                <p className="text-[10px] text-white">{match.kda}</p>
              </div>
              <div className="text-right">
                <p className={`text-xs font-bold ${match.result === 'WIN' ? 'text-cyan-400' : 'text-red-400'}`}>
                  {match.lp}
                </p>
                <p className="text-[10px] text-gray-400">{match.cs}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
