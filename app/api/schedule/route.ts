import { NextResponse } from "next/server";
import { buildSchedulePrompt } from "../../../lib/ai";
import { distributeStudyMinutes } from "../../../lib/schedule";

export async function POST(request: Request) {
  const { subjects = [], dailyMinutes = 120, availableDays = [] } =
    (await request.json()) as {
      subjects?: Array<{ name: string; difficulty: number; examDate: string }>;
      dailyMinutes?: number;
      availableDays?: string[];
    };

  const allocation = distributeStudyMinutes(
    subjects.map((subject) => ({ name: subject.name, difficulty: subject.difficulty })),
    dailyMinutes
  );
  const prompt = buildSchedulePrompt({ subjects, dailyMinutes, availableDays });

  return NextResponse.json({
    allocation,
    prompt,
    message: "Use allocation weights to seed the AI scheduling call."
  });
}
