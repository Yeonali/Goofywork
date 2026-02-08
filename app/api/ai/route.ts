import { NextResponse } from "next/server";
import { buildProductivityInsightPrompt } from "../../../lib/ai";

export async function POST(request: Request) {
  const { context } = (await request.json()) as { context?: string };
  const prompt = buildProductivityInsightPrompt(context ?? "");

  return NextResponse.json({
    prompt,
    message:
      "Send this prompt to OpenAI and store the returned suggestions in the user insights collection."
  });
}
