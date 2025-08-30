import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { text, target } = await req.json();

  const res = await fetch(
    `https://translation.googleapis.com/language/translate/v2?key=${process.env.GOOGLE_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: text,
        target, // e.g. 'fr' for French, 'es' for Spanish
        format: "text",
      }),
    }
  );

  const data = await res.json();

  return NextResponse.json(data.data.translations[0].translatedText);
}
