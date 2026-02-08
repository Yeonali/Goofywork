import { NextResponse } from "next/server";
import { extractTextFromImage, summarizePdf } from "../../../lib/ocr";

export async function POST(request: Request) {
  const { type, url } = (await request.json()) as { type: string; url: string };

  if (type === "image") {
    const result = await extractTextFromImage(url);
    return NextResponse.json({ result });
  }

  if (type === "pdf") {
    const summary = await summarizePdf(url);
    return NextResponse.json({ summary });
  }

  return NextResponse.json({ error: "Unsupported type" }, { status: 400 });
}
