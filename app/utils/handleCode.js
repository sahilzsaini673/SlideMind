export const handleCode = async (userInput, message, files, setFiles) => {

  console.log("Fetching AI generated code..,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.");
  try {
    const res = await fetch("/api/code/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: userInput,
        history: message.slice(-5), // last 5 messages only
      }),
    });

    const data = await res.json();

    // Inject tailwind if index.html exists
    if (data.files["/index.html"]) {
      data.files["/index.html"].code = data.files["/index.html"].code.replace(
        "</head>",
        `  <script src="https://cdn.tailwindcss.com"></script>\n</head>`
      );
    }

    // Update the files state
    setFiles({ ...files, ...data.files });

    // Dynamically load Tailwind script
    const script = document.createElement("script");
    script.src = "https://cdn.tailwindcss.com";
    script.async = true;
    document.body.appendChild(script);
  } catch (error) {
    console.error("Gemini API error:", error);
  }
};
