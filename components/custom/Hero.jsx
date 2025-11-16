"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

function Hero() {
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
    <div className="bg-[#000] bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="flex flex-col gap-2 items-center ">
        <h1 className="text-white font-bold text-5xl p-4 text-center">
          What do you want build?
        </h1>
        <p className="text-white font-medium p-5 text-center">
          Create stunning apps & websites by chatting with AI.
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

      <div className="w-full  pt-20 px-6 text-white bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto text-center space-y-14">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            ✨ Why Choose Us?
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold">⚡ Fast & Intuitive</h3>
              <p className="text-gray-300 text-lg">
                Start building in seconds with a UI so simple, anyone can use
                it.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-semibold">🤖 Smart AI Assistant</h3>
              <p className="text-gray-300 text-lg">
                Get help from our AI at every step — from idea to deployment.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-semibold">📦 Production-Ready</h3>
              <p className="text-gray-300 text-lg">
                Export clean, scalable code or deploy directly with one click.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="how-it-works" className="w-full px-4 py-10 mt-[150px] md:py-16 ">
        <h1 className="text-white font-bold text-4xl md:text-5xl text-center mb-10">
          How it works?
        </h1>

        <section className="w-full py-16 px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-[1200px] mx-auto">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src="/step-1.png"
                  alt="Idea Illustration"
                  width={600}
                  height={325}
                  className="rounded-md object-cover border"
                />
              </AspectRatio>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 text-white space-y-4 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold">
                🧠 Step 1: Describe Your Idea
              </h1>
              <p className="text-gray-300">
                Tell us what you want to build — in your own words.
              </p>
              <p className="italic text-gray-400">
                “I want to create a task manager app with a calendar and
                reminders”
              </p>
              <p className="italic text-gray-400">
                “Build a travel blog with user profiles, dark mode, and a photo
                gallery”
              </p>
              <p className="text-gray-300">
                The more details you give, the better the results!
              </p>
            </div>
          </div>
        </section>

        <div className="w-full py-16 px-4">
          <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 w-full max-w-[1200px] mx-auto">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src="/step-2.png"
                  alt="AI Chat Step"
                  width={600}
                  height={325}
                  className="rounded-md object-cover border"
                />
              </AspectRatio>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-white space-y-4 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold">
                🤖 Step 2: Chat with AI to Build Your Project
              </h1>
              <p className="text-gray-300">
                Once you submit your idea, our AI will analyze it and start
                generating a personalized project plan.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Refine features and functionality</li>
                <li>Add custom pages, components, or APIs</li>
                <li>Choose tech stacks like React, Tailwind, or Next.js</li>
                <li>Preview real code in real time</li>
              </ul>
              <p className="text-gray-300">
                This is your collaborative playground — no coding required
                upfront!
              </p>
            </div>
          </div>
        </div>

        <div className="w-full py-16 px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-[1200px] mx-auto">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src="/step-3.png"
                  alt="Idea Illustration"
                  width={600}
                  height={325}
                  className="rounded-md object-cover border"
                />
              </AspectRatio>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-white space-y-4 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold">
                🚀 Step 3: Preview, Customize, and Export
              </h1>
              <p className="text-gray-300">
                Once your project is ready, you can:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>🎨 Preview it live in the browser</li>
                <li>🛠️ Tweak UI/UX with our visual editor or AI suggestions</li>
                <li>📦 Download the full source code or export to GitHub</li>
                <li>🚀 Deploy with one click using Vercel or Netlify</li>
              </ul>
              <p className="text-gray-300">
                You now have a fully working starter app ready to grow — all
                from your ideas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-black text-gray-300 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-white text-2xl font-bold">🚀 SlideMind</h2>
            <p className="text-sm mt-1">
              Turn your ideas into code – instantly.
            </p>
          </div>

          {/* Links */}
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white transition">
              Home
            </a>
            <a href="#how-it-works" className="hover:text-white transition">
              How It Works
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} SlideMind. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Hero;
