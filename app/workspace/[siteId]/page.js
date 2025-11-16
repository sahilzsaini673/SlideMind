"use client";
import React, { useEffect, useState } from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackFileExplorer,
} from "@codesandbox/sandpack-react";
import Lookup from "@/app/data/Lookup";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { ArrowUp, Code, Eye } from "lucide-react";
import { LoaderCircle } from "lucide-react";
import { useSession } from "next-auth/react";
import MobileWarningWrapper from "@/components/custom/MobileWarningWrapper";
import axios from "axios";
import Image from "next/image";

// Premium - Option B: Hacker Dark Terminal style

export default function WorkSpace() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      console.log("User Image URL:", session?.user?.image);
    }
  }, [status, session]);

  const [activateTab, setActivatedTab] = useState("Code");
  const [files, setFiles] = useState({});
  const [mounted, setMounted] = useState(false);
  const [start, setStart] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  useEffect(() => setMounted(true), []);

  const handle = (input) => setActivatedTab(input);

  const downloadProject = async () => {
    try {
      const zip = new JSZip();
      Object.keys(files).forEach((fileName) => {
        zip.file(fileName.replace(/^\//, ""), files[fileName].code);
      });
      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, "project.zip");
    } catch (e) {
      console.error("Download error:", e);
    }
  };

  const [message, setMessage] = useState([
    { msg: "$ booting assistant...", sender: "bot" },
  ]);

  const handleCode = async (userInput, code) => {
    setActivatedTab("Code");
    setLoading2(true);
    try {
      const res = await fetch("/api/code/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userInput, history: code, start }),
      });
      const data = await res.json();

      if (data.files && data.files["/index.html"]) {
        data.files["/index.html"].code = data.files["/index.html"].code.replace(
          "</head>",
          `  <script src=\"https://cdn.tailwindcss.com\"></script>
</head>`
        );
      }

      if (data.files && Object.keys(data.files).length > 0) {
        setFiles(data.files);
      } else {
        console.warn("No files returned by Gemini API.");
      }

      // ensure Tailwind available for preview
      if (typeof document !== "undefined") {
        const id = "_tw_loader_";
        if (!document.getElementById(id)) {
          const script = document.createElement("script");
          script.id = id;
          script.src = "https://cdn.tailwindcss.com";
          script.async = true;
          document.body.appendChild(script);
        }
      }

      setStart(true);
    } catch (error) {
      console.error("Gemini API error:", error);
    } finally {
      setLoading2(false);
    }
  };

  const handleMessage = async (input) => {
    if (!input || input.trim() === "") return;
    const newMessage = { msg: input, sender: "user" };
    setMessage((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    try {
      // Step 1: Get bot chat response
      const res = await fetch("/api/chat/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          history: [...message, newMessage],
          prompt: input,
        }),
      });

      const data = await res.json();
      const botMessage = {
        msg: data.response || "(no response)",
        sender: "bot",
      };
      setMessage((prev) => [...prev, botMessage]);
      setLoading(false);

      // Pass bot response to code generator
      await handleCode(data.response || "", files);
    } catch (error) {
      console.error("Gemini API error:", error);
      setLoading(false);
    }
  };

  const [input, setInput] = useState("");


  return (
    <MobileWarningWrapper>
      <div className="min-h-screen  bg-[#020204] text-slate-200 font-sans">
        <div className="max-w-full  mx-auto px-4 py-6">
          <div className="grid grid-cols-12 gap-4 mt-[60px]">
            {/* Left: Narrow vertical controls + logo */}
            <aside className="col-span-1 flex flex-col gap-4 items-center ">
              {/* <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600 to-teal-400 flex items-center justify-center shadow-xl">
                <span className="font-mono text-sm text-black">TER</span>
              </div> */}

              <div className="flex flex-col gap-3 mt-6">
                <button
                  title="Code"
                  onClick={() => handle("Code")}
                  className={`w-12 h-12 rounded-md flex items-center justify-center transition-all transform hover:scale-110 ${
                    activateTab === "Code"
                      ? "bg-slate-800 ring-2 ring-teal-400"
                      : "bg-transparent"
                  }`}
                >
                  <Code />
                </button>
                <button
                  title="Preview"
                  onClick={() => handle("Preview")}
                  className={`w-12 h-12 rounded-md flex items-center justify-center transition-all transform hover:scale-110 ${
                    activateTab === "Preview"
                      ? "bg-slate-800 ring-2 ring-teal-400"
                      : "bg-transparent"
                  }`}
                >
                  <Eye />
                </button>

                <button
                  title="Export"
                  onClick={downloadProject}
                  className="w-12 h-12 rounded-md bg-slate-800 flex items-center justify-center mt-4 hover:scale-105"
                >
                  <Rocket />
                </button>
              </div>

              
            </aside>

            {/* Main area: editor / preview */}
            <main className="col-span-8 bg-[#050506] rounded-lg shadow-lg border border-slate-800 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <div className="ml-3 text-sm font-mono text-slate-300">
                    Hacker Desk
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="text-xs text-slate-400">Template: React</div>
                  <div className="px-3 py-1 rounded bg-slate-900 text-xs">
                    Dark
                  </div>
                </div>
              </div>

              <div className="h-[74vh]">
                {mounted && (
                  <SandpackProvider
                    template="react"
                    theme="dark"
                    files={files}
                    options={{
                      externalResources: [
                        "https://unpkg.com/@tailwindcss/browser@4",
                      ],
                    }}
                    customSetup={{ dependencies: { ...Lookup.DEPENDENCY } }}
                  >
                    <SandpackLayout>
                      {activateTab === "Code" ? (
                        <div className="flex h-full overflow-x-auto">
                          <div className="w-52 bg-[#060607] border-r border-slate-800">
                            <SandpackFileExplorer style={{ height: "100%" }} />
                          </div>
                          <div className="flex-1 ">
                            <SandpackCodeEditor style={{ height: "76.5vh" }} />
                          </div>
                        </div>
                      ) : (
                        <SandpackPreview
                          showNavigator
                          style={{ height: "76.5vh" }}
                        />
                      )}
                    </SandpackLayout>
                  </SandpackProvider>
                )}
              </div>

              {/* overlay loader for code generation */}
              {loading2 && (
                <div className="absolute left-[6.5rem] top-20 right-8 bottom-12 flex items-center justify-center bg-black/60 z-40 rounded-lg">
                  <div className="p-4 text-center text-slate-200">
                    <div className="flex items-center justify-center gap-3">
                      <LoaderCircle className="animate-spin" />
                      <div className="font-mono">
                        Generating code — this might take a moment
                      </div>
                    </div>
                    <div className="text-xs mt-2 opacity-70">
                      Response streaming from Gemini
                    </div>
                  </div>
                </div>
              )}
            </main>

            {/* Right: terminal/chat */}
            <aside className="col-span-3">
              <div className="bg-gradient-to-br from-[#071018] to-[#030305] rounded-lg shadow-inner border border-slate-800 h-[84vh] overflow-hidden flex flex-col">
                <div className="px-4 py-3 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-black/40 rounded-md flex items-center justify-center font-mono">
                      AI
                    </div>
                    <div>
                      <div className="text-sm font-semibold">
                        Assistant Terminal
                      </div>
                      <div className="text-xs text-slate-400">
                        Type commands or ask for UI/code
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-slate-400">
                    Status: {loading ? "Thinking" : "Idle"}
                  </div>
                </div>

                <div
                  className="flex-1 p-4 overflow-y-auto font-mono text-sm text-slate-300"
                  id="chat-scroll"
                >
                  {message.map((m, i) => (
                    <div
                      key={i}
                      className={`mb-3 ${
                        m.sender === "user" ? "text-sky-300" : "text-slate-300"
                      }`}
                    >
                      <div
                        className={`inline-block px-3 py-2 rounded ${
                          m.sender === "user"
                            ? "bg-black/40"
                            : "bg-gradient-to-r from-slate-900 to-slate-800"
                        }`}
                      >
                        {m.msg}
                      </div>
                    </div>
                  ))}

                  {loading && (
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <LoaderCircle className="animate-spin" />
                      <span>Generating response...</span>
                    </div>
                  )}
                </div>

                <div className="p-3 border-t border-slate-800 bg-[#040404]">
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="$ type a command, for example: \"
                        className="w-full bg-transparent text-slate-200 placeholder-slate-500 resize-none h-24 outline-none font-mono text-sm"
                      />

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleMessage(input)}
                            className="px-3 py-1 rounded bg-teal-500 text-black font-semibold hover:brightness-105"
                          >
                            <ArrowUp className="inline-block mr-2" /> Run
                          </button>

                          <button
                            onClick={() => {
                              setMessage([{ msg: "$ ready.", sender: "bot" }]);
                              setFiles({});
                            }}
                            className="px-3 py-1 rounded bg-slate-800 text-xs"
                          >
                            Reset
                          </button>
                        </div>

                        <div className="text-xs text-slate-500">
                          Tip: be specific for best results
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </MobileWarningWrapper>
  );
}
