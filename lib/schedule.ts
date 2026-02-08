import type { ScheduleOutput } from "./ai";

export type TaskAdjustment = {
  taskId: string;
  status: "missed" | "completed" | "hard";
  minutesDelta: number;
};

export function distributeStudyMinutes(
  subjects: Array<{ name: string; difficulty: number }>,
  dailyMinutes: number
) {
  const totalDifficulty = subjects.reduce((sum, subject) => sum + subject.difficulty, 0);
  return subjects.map((subject) => ({
    subject: subject.name,
    minutes: Math.round((subject.difficulty / totalDifficulty) * dailyMinutes)
  }));
}

export function adjustSchedule(
  schedule: ScheduleOutput[],
  adjustments: TaskAdjustment[]
): ScheduleOutput[] {
  const adjustmentMap = new Map(adjustments.map((item) => [item.taskId, item]));
  return schedule.map((entry) => {
    const adjustment = adjustmentMap.get(entry.day);
    if (!adjustment) {
      return entry;
    }
    const minutes = Math.max(20, entry.minutes + adjustment.minutesDelta);
    const reasoning =
      adjustment.status === "missed"
        ? "Rebalance workload after missed task"
        : adjustment.status === "hard"
        ? "Added time to reinforce hard topic"
        : "Trimmed time after finishing early";
    return {
      ...entry,
      minutes,
      reasoning
    };
  });
}

export function rankTodoTasks(tasks: Array<{ id: string; priority: number; dueInDays: number }>) {
  return [...tasks].sort((a, b) => {
    const priorityDiff = b.priority - a.priority;
    if (priorityDiff !== 0) {
      return priorityDiff;
    }
    return a.dueInDays - b.dueInDays;
  });
}
