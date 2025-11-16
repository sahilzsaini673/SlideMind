"use client"
import { ArrowRight } from "lucide-react";
import React from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function HeroSection() {
  const { data: session } = useSession();
  const router = useRouter();
  const siteId = "build-components=model";

  const onClick = () => {
    if (session) {
      router.push(`/workspace/${siteId}`);
    } else {
      toast("Sign in required", {
        description: "Please log in to access your workspace.",
        action: {
          label: "Sign In",
          onClick: () => signIn(),
        },
      });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl">
            Create Stunning React,{" "}
            <span className="bg-gradient-to-r from-slate-300 via-purple-400 to-purple-600 bg-clip-text text-transparent">
              Components
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Create stunning apps & websites by chatting with AI
          </p>
          <div className="mt-[40px]">
            <button
              onClick={onClick}
              type="button"
              className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold border-4 border-white group"
            >
              <div className="bg-neutral-800 rounded-xl h-12 w-1/4 grid place-items-center absolute left-0 top-0 group-hover:w-full z-10 duration-500">
                <ArrowRight className="h-8 w-8 text-white" />
              </div>
              <p className="translate-x-4">Get Started</p>
            </button>
          </div>
        </div>

        <div className="relative mt-24 flex justify-center items-end gap-4 perspective-1000">
          <div className="relative transform rotate-[-8deg] hover:rotate-[-4deg] transition-transform duration-500">
            <div className="w-72 h-44 rounded-2xl bg-gradient-to-br from-purple-600 via-purple-800 to-blue-900 shadow-2xl p-6 flex flex-col justify-between border border-purple-400/30">
              <div className="w-12 h-10 bg-gradient-to-br from-amber-300 to-amber-500 rounded opacity-80"></div>
              <div className="space-y-2">
                <div className="w-32 h-3 bg-white/20 rounded"></div>
                <div className="w-24 h-3 bg-white/15 rounded"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              <div className="absolute inset-0 shadow-[0_0_40px_rgba(168,85,247,0.4)]"></div>
            </div>
          </div>

          <div className="relative transform rotate-[-4deg] hover:rotate-[-2deg] transition-transform duration-500">
            <div className="w-72 h-44 rounded-2xl bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 shadow-2xl p-6 flex flex-col justify-between border border-cyan-300/30">
              <div className="w-12 h-10 bg-gradient-to-br from-amber-300 to-amber-500 rounded opacity-80"></div>
              <div className="space-y-2">
                <div className="w-32 h-3 bg-white/20 rounded"></div>
                <div className="w-24 h-3 bg-white/15 rounded"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              <div className="absolute inset-0 shadow-[0_0_40px_rgba(34,211,238,0.4)]"></div>
            </div>
          </div>

          <div className="relative transform rotate-[4deg] hover:rotate-[2deg] transition-transform duration-500">
            <div className="w-72 h-44 rounded-2xl bg-gradient-to-br from-orange-500 via-red-600 to-pink-700 shadow-2xl p-6 flex flex-col justify-between border border-orange-400/30">
              <div className="w-12 h-10 bg-gradient-to-br from-amber-300 to-amber-500 rounded opacity-80"></div>
              <div className="space-y-2">
                <div className="w-32 h-3 bg-white/20 rounded"></div>
                <div className="w-24 h-3 bg-white/15 rounded"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              <div className="absolute inset-0 shadow-[0_0_40px_rgba(249,115,22,0.4)]"></div>
            </div>
          </div>

          <div className="relative transform rotate-[8deg] hover:rotate-[4deg] transition-transform duration-500">
            <div className="w-72 h-44 rounded-2xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-black shadow-2xl p-6 flex flex-col justify-between border border-zinc-600/50">
              <div className="w-12 h-10 bg-gradient-to-br from-amber-300 to-amber-500 rounded opacity-80"></div>
              <div className="space-y-2">
                <div className="w-32 h-3 bg-white/20 rounded"></div>
                <div className="w-24 h-3 bg-white/15 rounded"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
              <div className="absolute inset-0 shadow-[0_0_40px_rgba(113,113,122,0.3)]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
