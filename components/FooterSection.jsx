import Image from 'next/image';

export default function FooterSection() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-zinc-900 py-16 px-6">
      <div className="max-w-7xl mx-auto flex justify-between md:flex-row">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 to-cyan-500 rounded-lg flex items-center justify-center">
                <Image src="/logo.png" width={60} height={60} alt='logo'/>
              </div>
              <span className="text-2xl font-bold text-white">SlideMind</span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-zinc-900 flex flex-col justify-between items-center gap-6">
          <p className="text-neutral-400 text-sm">
            © SlideMind 2025
          </p>
        </div>
      </div>
    </footer>
  );
}