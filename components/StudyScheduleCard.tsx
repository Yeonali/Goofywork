import type { StudyTask } from "../lib/types";

const tasks: StudyTask[] = [
  {
    id: "1",
    title: "Calculus: Integration practice",
    time: "08:00 - 09:30",
    subject: "Math",
    completed: true
  },
  {
    id: "2",
    title: "Biology: Genetics quiz",
    time: "10:00 - 11:00",
    subject: "Biology",
    completed: false
  },
  {
    id: "3",
    title: "History: WW2 timeline review",
    time: "18:00 - 19:00",
    subject: "History",
    completed: false
  }
];

export default function StudyScheduleCard() {
  return (
    <div className="card">
      <div className="section-title">
        <h2>AI study scheduler</h2>
        <span className="pill">Auto-adjusted</span>
      </div>
      <div className="list">
        {tasks.map((task) => (
          <div key={task.id} className="list-item">
            <div>
              <strong>{task.title}</strong>
              <p className="muted">
                {task.time} · {task.subject}
              </p>
            </div>
            <input type="checkbox" checked={task.completed} readOnly />
          </div>
        ))}
      </div>
      <div className="callout" style={{ marginTop: 16 }}>
        <strong>AI adjustment</strong>
        <p className="muted">
          Extended Biology by 20 min because yesterday&apos;s quiz was marked hard.
        </p>
      </div>
    </div>
  );
}
