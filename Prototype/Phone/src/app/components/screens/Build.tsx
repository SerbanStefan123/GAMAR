import { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { X, Sword, Shield as ShieldIcon, Target } from 'lucide-react';

export function Build() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const builds = [
    {
      name: 'Aggressive Build',
      icon: Sword,
      color: 'red',
      items: ['/item1.png', '/item2.png', '/item3.png'],
      cost: '9600g',
    },
    {
      name: 'Safe Build',
      icon: ShieldIcon,
      color: 'cyan',
      items: ['/item2.png', '/item3.png', '/item1.png'],
      cost: '8800g',
    },
    {
      name: 'Anti-Tank Build',
      icon: Target,
      color: 'purple',
      items: ['/item3.png', '/item1.png', '/item2.png'],
      cost: '10200g',
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto pb-20">
      {selectedItem && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl border border-slate-700 p-6 w-80 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white">Item Details</h3>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col items-center mb-4">
              <div className="w-24 h-24 rounded-xl bg-slate-800 overflow-hidden mb-3 border-2 border-cyan-500 shadow-lg shadow-cyan-500/50">
                <ImageWithFallback
                  src={selectedItem}
                  alt="Item"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg text-white mb-1">Item Name</h4>
              <p className="text-yellow-400 text-sm">3200g</p>
            </div>

            <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-800 mb-4">
              <p className="text-xs text-slate-400 mb-2">STATS</p>
              <ul className="space-y-1 text-sm text-slate-300">
                <li>+ Attack Damage</li>
                <li>+ Attack Speed</li>
                <li>+ Critical Strike</li>
              </ul>
            </div>

            <div className="bg-cyan-950/30 rounded-xl p-3 border border-cyan-500/30">
              <p className="text-xs text-cyan-300">
                Best when ahead in lane.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="p-4 space-y-4">
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-2xl p-5 border border-slate-800">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-cyan-500 shadow-lg shadow-cyan-500/50">
              <ImageWithFallback
                src="/champion1.png"
                alt="Champion"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-xl text-white mb-1">Kai'Sa</h2>
              <div className="flex gap-2 text-sm">
                <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-400 rounded border border-cyan-500/30">
                  ADC
                </span>
                <span className="px-2 py-0.5 bg-red-500/20 text-red-400 rounded border border-red-500/30">
                  vs Jinx
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-2xl p-5 border border-slate-800">
          <h3 className="text-sm text-slate-400 mb-3">Recommended Build Path</h3>
          <div className="space-y-3">
            {[
              { label: 'Starting Item', item: '/item1.png' },
              { label: 'Core Item 1', item: '/item2.png' },
              { label: 'Core Item 2', item: '/item3.png' },
              { label: 'Situational Item', item: '/item1.png' },
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedItem(step.item)}
                  className="w-12 h-12 rounded-lg bg-slate-800 overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all hover:scale-110"
                >
                  <ImageWithFallback
                    src={step.item}
                    alt={step.label}
                    className="w-full h-full object-cover"
                  />
                </button>
                <div className="flex-1">
                  <p className="text-sm text-slate-300">{step.label}</p>
                  {i < 3 && (
                    <div className="w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent mt-1 rounded"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {builds.map((build, i) => {
            const Icon = build.icon;
            const colorClasses = {
              red: {
                bg: 'from-red-950/40 to-red-900/40',
                border: 'border-red-600/30',
                text: 'text-red-300',
                icon: 'text-red-400',
              },
              cyan: {
                bg: 'from-cyan-950/40 to-cyan-900/40',
                border: 'border-cyan-600/30',
                text: 'text-cyan-300',
                icon: 'text-cyan-400',
              },
              purple: {
                bg: 'from-purple-950/40 to-purple-900/40',
                border: 'border-purple-600/30',
                text: 'text-purple-300',
                icon: 'text-purple-400',
              },
            }[build.color];

            return (
              <div
                key={i}
                className={`bg-gradient-to-br ${colorClasses.bg} backdrop-blur-sm rounded-2xl p-4 border ${colorClasses.border}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon className={`w-4 h-4 ${colorClasses.icon}`} />
                  <h3 className={`text-sm ${colorClasses.text}`}>{build.name}</h3>
                </div>

                <div className="flex gap-2 mb-3">
                  {build.items.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedItem(item)}
                      className="flex-1 aspect-square rounded-lg bg-slate-800/60 overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all hover:scale-105"
                    >
                      <ImageWithFallback
                        src={item}
                        alt="Item"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Total Cost</span>
                  <span className="text-yellow-400">{build.cost}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
