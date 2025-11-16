import { Download, TrendingUp } from 'lucide-react';

export default function SecurityDashboardSection() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-8 border border-zinc-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-sm text-neutral-400 mt-2">Build</p>
                  <h3 className="text-2xl font-bold text-white">progressively</h3>
                </div>
                {/* <div className="px-4 py-2 bg-zinc-800 rounded-full text-sm text-white flex items-center gap-2">
                  <TrendingUp size={16} />
                  This Week
                </div> */}
              </div>

              <div className="flex items-end gap-2 h-48">
                {[30, 40, 50, 60, 70, 80, 90, 100].map((height, index) => (
                  <div
                    key={index}
                    className={`flex-1 rounded-t-lg transition-all duration-300 ${
                      index === 7 ? 'bg-white' : 'bg-zinc-700'
                    }`}
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-10 right-10 w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(168,85,247,0.8)]"></div>
            <div className="absolute top-20 left-10 w-1 h-1 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-5xl font-bold text-white leading-tight">
            Preview, Customize, and Export
          </h2>
          <p className="text-xl text-neutral-400 leading-relaxed">
            Once you submit your idea, our AI will analyze it and start generating a personalized project plan. This is your collaborative playground — no coding required upfront!
          </p>
          {/* <button className="mt-4 px-8 py-4 bg-white text-black font-semibold rounded-xl transition-all duration-300 flex items-center gap-3 hover:bg-neutral-200 shadow-xl">
            <Download size={20} />
            Download for Free
          </button> */}
        </div>
      </div>
    </section>
  );
}
