import Image from "next/image";
export default function TestimonialSection() {
  return (
    <section className="bg-[#0A0A0A] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Built with Passion, Crafted for Developers
          </h2>
          <p className="text-xl text-neutral-400">
            A message from the creator behind this project
          </p>
        </div>

        <div className="relative flex justify-center items-center min-h-[400px]">
          <div className="absolute w-full max-w-2xl transform rotate-[-4deg] scale-95 opacity-30">
            <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800"></div>
          </div>

          <div className="absolute w-full max-w-2xl transform rotate-[2deg] scale-[0.97] opacity-50">
            <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800"></div>
          </div>

          <div className="relative w-full max-w-2xl bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-10 border border-zinc-700 shadow-2xl z-10">
            <div className="mb-8">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-6 h-6 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-2xl font-semibold text-white mb-6 leading-relaxed">
                "I built this tool to help developers turn ideas into React components instantly."
              </blockquote>

              <p className="text-lg text-neutral-400 leading-relaxed">
                As a developer, I know how much time it takes to structure components, 
                handle UI logic, and get things just right. This project was created to make 
                that process faster, simpler, and more enjoyable — giving developers the power 
                to build beautifully and efficiently with just a prompt.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-zinc-800">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
                <Image className="rounded-full" src="/profile-Image.png" width={60} height={60}  alt="profile image"/>
              </div>
              <div>
                <p className="text-white font-semibold">Sahil Saini (+91 8923616023)</p>
                {/* <p className="text-neutral-400 text-sm"></p> */}
                <p className="text-neutral-400 text-sm">sahilsaini22001@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
