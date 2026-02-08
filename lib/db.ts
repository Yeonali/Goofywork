export type UserProfile = {
  id: string;
  name: string;
  email: string;
  studyGoal: string;
};

export type Subject = {
  id: string;
  name: string;
  difficulty: number;
};

export type Note = {
  id: string;
  subjectId: string;
  title: string;
  type: "pdf" | "image" | "link" | "video";
  url: string;
  createdAt: string;
  aiSummary?: string;
};

export type Exam = {
  id: string;
  subjectId: string;
  name: string;
  date: string;
  syllabus: string[];
};

export type HabitEntry = {
  id: string;
  habit: string;
  date: string;
  value: number;
};

export const schemaOverview = {
  users: "Profile, preferences, AI insights",
  subjects: "Difficulty, progress, upcoming exam",
  notes: "Storage URL, OCR text, AI summary",
  exams: "Date, syllabus items, revision plan",
  tasks: "Planner blocks, completion",
  habits: "Daily logs and streaks"
};
