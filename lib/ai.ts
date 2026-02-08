export type ScheduleInput = {
  subjects: Array<{ name: string; difficulty: number; examDate: string }>;
  dailyMinutes: number;
  availableDays: string[];
};

export type ScheduleOutput = {
  day: string;
  focus: string;
  minutes: number;
  reasoning: string;
};

export type AiSuggestion = {
  title: string;
  detail: string;
};

export function buildSchedulePrompt(input: ScheduleInput) {
  return {
    model: "gpt-4o-mini",
    temperature: 0.3,
    messages: [
      {
        role: "system",
        content:
          "You are an academic planning assistant. Output concise JSON for a weekly study plan."
      },
      {
        role: "user",
        content: `Create a 7-day plan using ${input.dailyMinutes} minutes per day for subjects: ${input.subjects
          .map((subject) => `${subject.name} (difficulty ${subject.difficulty}, exam ${subject.examDate})`)
          .join(", ")}. Available days: ${input.availableDays.join(", ")}.`
      }
    ]
  };
}

export function summarizeNotePrompt(text: string) {
  return {
    model: "gpt-4o-mini",
    temperature: 0.2,
    messages: [
      { role: "system", content: "Summarize notes for a student." },
      { role: "user", content: text }
    ]
  };
}

export function buildProductivityInsightPrompt(context: string) {
  return {
    model: "gpt-4o-mini",
    temperature: 0.4,
    messages: [
      {
        role: "system",
        content:
          "You are a study coach. Provide 3 concise insights as bullets with action verbs."
      },
      { role: "user", content: context }
    ]
  };
}

export function mapScheduleResponse(response: unknown): ScheduleOutput[] {
  if (!Array.isArray(response)) {
    return [];
  }
  return response
    .map((item) => {
      if (
        typeof item === "object" &&
        item !== null &&
        "day" in item &&
        "focus" in item &&
        "minutes" in item
      ) {
        return item as ScheduleOutput;
      }
      return null;
    })
    .filter((item): item is ScheduleOutput => item !== null);
}

export const fallbackSuggestions: AiSuggestion[] = [
  {
    title: "Math needs extra review",
    detail: "Schedule a 45-minute recap for Chapter 3 and solve 5 practice problems."
  },
  {
    title: "Your focus peaks in the evening",
    detail: "Reserve 7-9 PM for deep work and keep lighter tasks for midday."
  },
  {
    title: "Biology revision ahead",
    detail: "Plan a spaced repetition session 2 days before the exam."
  }
];
