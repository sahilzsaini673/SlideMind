import {
  Check,
  Search,
  TrendingUp,
  Wallet,
  Grid3x3,
  Settings,
} from "lucide-react";

export default function FeatureSection() {
  const features = [
    "Fast & Intuitive",
    "Smart AI Assistant",
    "Production-Ready",
  ];

  return (
    <section className="bg-[#0A0A0A] py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Section */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            How it works?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-neutral-400">
            A tool that generates fully functional React components instantly
            from a text prompt. Just describe what you need, and the app turns
            your prompt into ready-to-use React code.
          </p>

          <ul className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-base sm:text-lg text-white"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-white" />
                </div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="relative w-full overflow-x-auto">
          <div className="min-w-[320px] sm:min-w-0 bg-gradient-to-br from-zinc-900 to-black rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-zinc-800 shadow-2xl">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              {/* Sidebar */}
              <div className="flex-shrink-0 w-full sm:w-48 bg-zinc-800 rounded-xl p-3 sm:p-4 space-y-2 sm:space-y-3">
                {[
                  { icon: Grid3x3, label: "Dashboard", active: true },
                  { icon: TrendingUp, label: "Exchange", active: false },
                  { icon: Wallet, label: "NFT Market", active: false },
                  { icon: Settings, label: "Settings", active: false },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 px-2 py-2 rounded-lg text-sm transition-colors ${
                      item.active
                        ? "bg-purple-600 text-white"
                        : "text-neutral-400 hover:bg-zinc-700"
                    }`}
                  >
                    <item.icon size={16} />
                    <span className="font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Main Content */}
              <div className="flex-1 min-w-[240px]">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Portfolio
                  </h3>

                  {/* Search bar */}
                  <div className="flex items-center gap-2 bg-zinc-800 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2">
                    <Search size={14} className="text-neutral-400" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="bg-transparent text-sm text-white outline-none w-24 sm:w-32"
                    />
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-zinc-800 rounded-xl p-3 sm:p-4">
                    <p className="text-xs text-neutral-400 mb-1">
                      Total Balance
                    </p>
                    <p className="text-xl sm:text-2xl font-bold text-white">
                      $24,582
                    </p>
                    <p className="text-xs text-green-400 mt-1">+12.5%</p>
                  </div>

                  <div className="bg-zinc-800 rounded-xl p-3 sm:p-4">
                    <p className="text-xs text-neutral-400 mb-1">
                      Monthly Gain
                    </p>
                    <p className="text-xl sm:text-2xl font-bold text-white">
                      $3,240
                    </p>
                    <p className="text-xs text-green-400 mt-1">+8.2%</p>
                  </div>
                </div>

                {/* Chart */}
                <div className="bg-zinc-800 rounded-xl p-3 sm:p-4 h-24 sm:h-32 flex items-end gap-1">
                  {[30, 50, 40, 70, 60, 80, 55, 75, 65, 85, 70, 90].map(
                    (h, index) => (
                      <div
                        key={index}
                        className="flex-1 bg-gradient-to-t from-purple-600 to-cyan-500 rounded-t opacity-80"
                        style={{ height: `${h}%` }}
                      ></div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
