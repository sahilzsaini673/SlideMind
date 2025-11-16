"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function BannerSection() {
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
    <section className="bg-[#0A0A0A] py-24 px-6">
      <div className="max-w-8xl mx-auto">
        <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800 rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent"></div>

          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Start Creating Stunning React Components Now
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Create stunning apps & websites by chatting with AI today!
            </p>
            <button onClick={onClick} className="mt-8 px-10 py-4 bg-white text-black font-semibold rounded-xl transition-all duration-300 hover:bg-neutral-100 shadow-xl hover:scale-105">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
