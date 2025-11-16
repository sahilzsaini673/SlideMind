import { Bitcoin, Circle } from 'lucide-react';

export default function EffortlessSecuritySection() {
  return (
    <section className="bg-black py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Effortless Security Across All Platforms
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Seamlessly integrate with your favorite tools and platforms for comprehensive protection everywhere you work.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[400px] h-[400px] rounded-full border-2 border-purple-500/30 animate-[spin_20s_linear_infinite]"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[320px] h-[320px] rounded-full border border-purple-400/20"></div>
          </div>

          <div className="relative w-64 h-80 perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20 transform rotate-y-[-15deg] translate-z-[-40px]"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-white/8 rounded-2xl backdrop-blur-sm border border-white/30 transform rotate-y-[-8deg] translate-z-[-20px]"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl backdrop-blur-md border border-white/40 shadow-2xl"></div>
          </div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg border-4 border-black">
            <span className="text-2xl font-bold text-black">B</span>
          </div>

          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-full flex items-center justify-center shadow-lg border-4 border-black">
            <Circle className="text-white" size={32} />
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg border-4 border-black">
            <span className="text-3xl font-bold text-white">𝕏</span>
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center shadow-lg border-4 border-black">
            <Bitcoin className="text-white" size={36} />
          </div>

          <div className="absolute top-[15%] left-[20%] w-1 h-20 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
          <div className="absolute top-[15%] right-[20%] w-1 h-20 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
          <div className="absolute bottom-[15%] left-[20%] w-1 h-20 bg-gradient-to-t from-purple-500/50 to-transparent"></div>
          <div className="absolute bottom-[15%] right-[20%] w-1 h-20 bg-gradient-to-t from-purple-500/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
