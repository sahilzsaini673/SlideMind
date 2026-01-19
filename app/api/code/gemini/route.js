import { NextResponse } from "next/server";


export async function POST(req) {
  console.log("HELLO");
  try {
    const body = await req.json();
    const userInput = body.prompt;
    const history = body.history;
    const start = body.start;

    const formattedHistory = history;
    let userPrompt = "";

    // If it's the first request
    if (!start) {
      console.log("1");
      userPrompt = `
Generate a React component use only with .js file (avoid .jsx) 
Use tailwind CSS for styling. Allowed libraries: lucide-react icons (only if needed). Organize files without src folder.

Rules:
- If you use React.createElement or JSX in any file, ALWAYS include:
  import React from "react";
  at the top of every .js file.
- Do not omit this import.
-import every library you use

Output must follow exactly this schema:

{
  "projectTitle": "",
  "explanation": "",
  "files": {
    "/App.js": {
      "code": ""
    }
  },
  "generatedFiles": []
}

Ensure:
- All files included in "files" with their code
- "generatedFiles" lists the filenames
- "explanation" is a single paragraph
- Use emoji where suitable
- Do not include markdown, explanations, or code fences
- Return only valid JSON. No extra text.
-import every library you use


User request: ${userInput}`;
    } else {
      console.log("2");
      userPrompt = `Update the given code ${JSON.stringify(
        history
      )} according to user requirement: ${userInput}

      Output must follow exactly this schema:

{
  "projectTitle": "",
  "explanation": "",
  "files": {
    "/App.js": {
      "code": ""
    }
  },
  "generatedFiles": []
}

Rules:
- If you use React.createElement or JSX in any file, ALWAYS include:
-import every library you use.
  import React from "react";
  at the top of every .js file.
- Do not omit this import.
-Do not change the file Structure
- Return only valid JSON. No extra text.
-Always return full code`;
    }

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${process.env.Gemini_api_key}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userPrompt }] }],
        }),
      }
    );

    const result = await res.json();

    let responseText = result.candidates?.[0]?.content?.parts?.[0]?.text || "";
    console.log(responseText);

    // Remove markdown code fences
    responseText = responseText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let jsonData;
    try {
      jsonData = JSON.parse(responseText);
    } catch (err) {
      console.error("Failed to parse JSON. Raw Gemini output:", responseText);
      // Always return valid schema to frontend
      return NextResponse.json({
        projectTitle: "Error",
        explanation: "Gemini returned invalid JSON",
        files: {},
        generatedFiles: [],
      });
    }

    return NextResponse.json(jsonData);
  } catch (error) {
    console.error("Gemini API error:", error);
    return NextResponse.json({
      projectTitle: "Error",
      explanation: "Something went wrong",
      files: {},
      generatedFiles: [],
    });
  }
}
