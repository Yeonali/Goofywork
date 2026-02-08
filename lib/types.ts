export type SubjectProgress = {
  subject: string;
  progress: number;
  upcomingExam: string;
};

export type StudyTask = {
  id: string;
  title: string;
  time: string;
  subject: string;
  completed: boolean;
};

export type Habit = {
  name: string;
  streak: number;
  weeklyTarget: string;
};

export type NoteAsset = {
  title: string;
  type: "pdf" | "image" | "link" | "video";
  tag: string;
  aiSummary: string;
};

export type Exam = {
  name: string;
  subject: string;
  date: string;
  revisionFocus: string;
};

export type Todo = {
  task: string;
  priority: "High" | "Medium" | "Low";
  due: string;
};

export type PlannerDay = {
  day: string;
  items: string[];
};
