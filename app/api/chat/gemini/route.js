import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("GOTCHA")
  try {
    const body = await req.json();
    const userInput = body.prompt;
    const history = body.history || [];

    const formattedHistory = history.map((m) => `${m.sender === "user" ? "User" : "Bot"}: ${m.msg}`).join("\n");
    const userPrompt = `You are an AI Assistant experienced in Full Stack Development.
    Guidelines:
    1. Tell user what you are building.
    2. Keep your response less than 15 lines.
    3. Skip code examples and commentary.

    Previous conversation: 
    ${formattedHistory}
    User: ${userInput}
    AI:`;

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${process.env.Gemini_api_key}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userPrompt }] }],
        }),
      }
    );

    const result = await res.json();

    const responseText =
      result.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't understand that.";

    return NextResponse.json({ response: responseText });
  } catch (error) {
    console.error("Gemini API error:", error);
    return NextResponse.json(
      { response: "Something went wrong." },
      { status: 500 }
    );
  }
}
