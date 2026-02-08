import AiAssistantCard from "../components/AiAssistantCard";
import DashboardHeader from "../components/DashboardHeader";
import DashboardMetrics from "../components/DashboardMetrics";
import ExamTrackerCard from "../components/ExamTrackerCard";
import HabitTrackerCard from "../components/HabitTrackerCard";
import NotesVaultCard from "../components/NotesVaultCard";
import StudyScheduleCard from "../components/StudyScheduleCard";
import TodoListCard from "../components/TodoListCard";
import WeeklyPlannerBoard from "../components/WeeklyPlannerBoard";

export default function HomePage() {
  return (
    <main>
      <DashboardHeader />
      <DashboardMetrics />
      <section className="grid grid-2" style={{ marginTop: 24 }}>
        <StudyScheduleCard />
        <NotesVaultCard />
      </section>
      <section className="grid grid-2" style={{ marginTop: 24 }}>
        <ExamTrackerCard />
        <TodoListCard />
      </section>
      <section style={{ marginTop: 24 }}>
        <WeeklyPlannerBoard />
      </section>
      <section className="grid grid-2" style={{ marginTop: 24 }}>
        <HabitTrackerCard />
        <AiAssistantCard />
      </section>
    </main>
  );
}
