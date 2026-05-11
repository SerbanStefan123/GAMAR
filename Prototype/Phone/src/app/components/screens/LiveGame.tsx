import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  Clock,
  Wifi,
  TrendingUp,
  Bell,
  Timer,
  X,
} from "lucide-react";

export function LiveGame() {
  const [showItemNotification, setShowItemNotification] =
    useState(false);
  const [showObjectiveModal, setShowObjectiveModal] =
    useState(false);

  const allies = [
    {
      name: "GamarPlayer",
      champion: "/champion1.png",
      kda: "5/2/3",
      cs: 142,
      gold: "8.2k",
      items: ["/item1.png", "/item2.png"],
      dmg: 85,
    },
    {
      name: "TopLaner",
      champion: "/champion2.png",
      kda: "2/1/4",
      cs: 138,
      gold: "7.8k",
      items: ["/item2.png", "/item3.png"],
      dmg: 70,
    },
    {
      name: "Jungler",
      champion: "/champion3.png",
      kda: "1/3/6",
      cs: 98,
      gold: "6.5k",
      items: ["/item1.png"],
      dmg: 60,
    },
    {
      name: "MidLaner",
      champion: "/champion1.png",
      kda: "2/1/2",
      cs: 145,
      gold: "8.1k",
      items: ["/item3.png", "/item1.png"],
      dmg: 80,
    },
    {
      name: "Support",
      champion: "/champion2.png",
      kda: "0/1/8",
      cs: 32,
      gold: "5.2k",
      items: ["/item2.png"],
      dmg: 45,
    },
  ];

  const enemies = [
    {
      name: "Enemy1",
      champion: "/champion3.png",
      kda: "3/2/1",
      cs: 140,
      gold: "7.9k",
      items: ["/item1.png", "/item3.png"],
      dmg: 75,
    },
    {
      name: "Enemy2",
      champion: "/champion1.png",
      kda: "1/2/3",
      cs: 135,
      gold: "7.5k",
      items: ["/item2.png"],
      dmg: 65,
    },
    {
      name: "Enemy3",
      champion: "/champion2.png",
      kda: "2/2/2",
      cs: 102,
      gold: "6.8k",
      items: ["/item1.png", "/item2.png"],
      dmg: 70,
    },
    {
      name: "Enemy4",
      champion: "/champion3.png",
      kda: "1/3/4",
      cs: 138,
      gold: "7.2k",
      items: ["/item3.png"],
      dmg: 68,
    },
    {
      name: "Enemy5",
      champion: "/champion1.png",
      kda: "1/1/5",
      cs: 28,
      gold: "4.8k",
      items: ["/item1.png"],
      dmg: 42,
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto pb-20">
      {showItemNotification && (
        <div className="absolute top-4 left-4 right-4 z-50 bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-3 border border-red-500 shadow-lg shadow-red-500/50 flex items-center gap-3 animate-in slide-in-from-top">
          <div className="w-8 h-8 rounded bg-slate-900/50 overflow-hidden flex items-center justify-center">
            <ImageWithFallback
              src="/item1.png"
              alt="Item"
              className="w-6 h-6"
            />
          </div>
          <div className="flex-1">
            <p className="text-white text-sm">
              Enemy ADC bought{" "}
              <span className="text-yellow-300">
                Kraken Slayer
              </span>
            </p>
            <p className="text-red-200 text-xs">14:06</p>
          </div>
          <button
            onClick={() => setShowItemNotification(false)}
            className="text-red-200 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {showObjectiveModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl border border-slate-700 p-6 w-80 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white">Objective Timers</h3>
              <button
                onClick={() => setShowObjectiveModal(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3">
              {[
                {
                  name: "Baron Nashor",
                  time: "5:23",
                  color: "purple",
                },
                { name: "Dragon", time: "0:48", color: "cyan" },
                {
                  name: "Herald",
                  time: "Slain",
                  color: "slate",
                },
              ].map((obj, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl border ${
                    obj.color === "purple"
                      ? "bg-purple-950/30 border-purple-500/30"
                      : obj.color === "cyan"
                        ? "bg-cyan-950/30 border-cyan-500/30"
                        : "bg-slate-950/30 border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300 text-sm">
                      {obj.name}
                    </span>
                    <span
                      className={`text-sm ${
                        obj.color === "purple"
                          ? "text-purple-400"
                          : obj.color === "cyan"
                            ? "text-cyan-400"
                            : "text-slate-500"
                      }`}
                    >
                      {obj.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="p-4 space-y-4">
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-2xl p-4 border border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-cyan-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">14:06</span>
              </div>
              <div className="text-sm">
                <span className="text-cyan-400">10</span>
                <span className="text-slate-500 mx-1">/</span>
                <span className="text-red-400">8</span>
              </div>
              <div className="text-xs text-green-400">
                +1.2k
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <div className="text-green-400">FPS: 231</div>
              <div className="flex items-center gap-1 text-cyan-400">
                <Wifi className="w-3 h-3" />
                23ms
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-2xl p-3 border border-slate-800 overflow-hidden">
          <h3 className="text-xs text-slate-400 mb-2 px-1">
            Team Comparison
          </h3>
          <div className="space-y-1.5">
            <div className="grid grid-cols-[1fr,auto,1fr] gap-2 text-xs text-slate-400 px-1">
              <div>Allied Team</div>
              <div className="w-12 text-center">VS</div>
              <div>Enemy Team</div>
            </div>
            {allies.map((ally, i) => {
              const enemy = enemies[i];
              return (
                <div
                  key={i}
                  className="grid grid-cols-[1fr,auto,1fr] gap-2 text-xs"
                >
                  <div className="flex items-center gap-2 bg-cyan-950/20 border border-cyan-500/20 rounded-lg p-2">
                    <div className="w-6 h-6 rounded overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={ally.champion}
                        alt="Champion"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-slate-300 truncate text-xs">
                        {ally.name}
                      </p>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-slate-400">
                          {ally.kda}
                        </span>
                        <span className="text-slate-500">
                          {ally.cs}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {ally.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="w-4 h-4 rounded bg-slate-800 overflow-hidden"
                        >
                          <ImageWithFallback
                            src={item}
                            alt="Item"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-12 flex items-center justify-center">
                    <div className="h-1 w-8 bg-gradient-to-r from-cyan-500 to-red-500 rounded"></div>
                  </div>

                  <div className="flex items-center gap-2 bg-red-950/20 border border-red-500/20 rounded-lg p-2">
                    <div className="w-6 h-6 rounded overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={enemy.champion}
                        alt="Champion"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-slate-300 truncate text-xs">
                        {enemy.name}
                      </p>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-slate-400">
                          {enemy.kda}
                        </span>
                        <span className="text-slate-500">
                          {enemy.cs}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {enemy.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="w-4 h-4 rounded bg-slate-800 overflow-hidden"
                        >
                          <ImageWithFallback
                            src={item}
                            alt="Item"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-950/40 to-yellow-900/40 backdrop-blur-sm rounded-2xl p-4 border border-yellow-600/30">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-yellow-400" />
            <h3 className="text-sm text-yellow-300">
              Recommended Next Items
            </h3>
          </div>
          <div className="flex gap-3">
            {["/item1.png", "/item2.png", "/item3.png"].map(
              (item, i) => (
                <div
                  key={i}
                  className="flex-1 bg-slate-950/60 rounded-xl p-2 border border-slate-800 text-center"
                >
                  <div className="w-full aspect-square rounded-lg bg-slate-800 overflow-hidden mb-2">
                    <ImageWithFallback
                      src={item}
                      alt="Item"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs text-yellow-400">
                    {[700, 1200, 1900][i]}g needed
                  </p>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-950/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-4 border border-purple-600/30">
          <h3 className="text-sm text-purple-300 mb-2">
            CS per minute
          </h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-400">Current</span>
              <span className="text-white">7.4</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-400">Target</span>
              <span className="text-purple-400">8.5</span>
            </div>
            <p className="text-xs text-slate-300 mt-2 bg-slate-950/40 rounded-lg p-2">
              You are slightly behind. Focus next wave.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-2xl p-4 border border-slate-800">
          <div className="flex items-center gap-2 mb-3">
            <Bell className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm text-slate-300">
              Live Alerts
            </h3>
          </div>
          <div className="space-y-2">
            {[
              {
                text: "Enemy Mid bought",
                itemName: "Luden’s Tempest",
                itemIcon: "/item2.png",
                time: "14:02",
              },
              {
                text: "Ally Jungle completed",
                itemName: "Infinity Edge",
                itemIcon: "/item3.png",
                time: "13:45",
              },
              {
                text: "Dragon spawns in",
                itemName: "48s",
                itemIcon: null,
                time: "13:18",
              },
            ].map((alert, i) => (
              <div
                key={i}
                className="bg-slate-950/60 rounded-lg p-2 border border-slate-800 text-xs flex items-center gap-3"
              >
                {alert.itemIcon ? (
                  <div className="w-9 h-9 rounded-lg bg-slate-800 overflow-hidden border border-slate-700 flex-shrink-0">
                    <ImageWithFallback
                      src={alert.itemIcon}
                      alt={alert.itemName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-9 h-9 rounded-lg bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                    <Timer className="w-5 h-5 text-cyan-400" />
                  </div>
                )}

                <div className="flex-1">
                  <p className="text-slate-300">
                    {alert.text}{" "}
                    <span className="text-cyan-400">
                      {alert.itemName}
                    </span>
                  </p>
                  <p className="text-slate-500 text-xs mt-0.5">
                    {alert.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setShowItemNotification(true)}
            className="flex-1 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-xl p-4 border border-cyan-500 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
          >
            <div className="text-2xl mb-1"></div>
            <div className="text-xs">
              Trigger item notification
            </div>
          </button>

          <button
            onClick={() => setShowObjectiveModal(true)}
            className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl p-4 border border-purple-500 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
          >
            <Timer className="w-6 h-6 mx-auto mb-1" />
            <div className="text-xs">Show Objective Timer</div>
          </button>
        </div>
      </div>
    </div>
  );
}