import type { SubjectProgress } from "../lib/types";

const metrics = [
  { label: "Study hours", value: "4h 20m", delta: "+12% this week" },
  { label: "Tasks completed", value: "9 / 14", delta: "64% completion" },
  { label: "Upcoming exams", value: "3", delta: "Next: Biology in 6d" },
  { label: "Habit streak", value: "7 days", delta: "Focus streak" }
];

const progressRows: SubjectProgress[] = [
  { subject: "Mathematics", progress: 72, upcomingExam: "Algebra • 6d" },
  { subject: "Biology", progress: 58, upcomingExam: "Genetics • 10d" },
  { subject: "History", progress: 41, upcomingExam: "World War II • 14d" }
];

export default function DashboardMetrics() {
  return (
    <section className="grid grid-2">
      <div className="card">
        <div className="section-title">
          <h2>Today at a glance</h2>
          <span className="badge">AI synced</span>
        </div>
        <div className="grid grid-2">
          {metrics.map((metric) => (
            <div key={metric.label} className="list-item">
              <div>
                <p className="muted">{metric.label}</p>
                <h3>{metric.value}</h3>
              </div>
              <span className="tag">{metric.delta}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="card">
        <div className="section-title">
          <h2>Subject progress</h2>
          <span className="pill">Weekly view</span>
        </div>
        <div className="list">
          {progressRows.map((row) => (
            <div key={row.subject}>
              <div className="list-item" style={{ marginBottom: 8 }}>
                <div>
                  <strong>{row.subject}</strong>
                  <p className="muted">{row.upcomingExam}</p>
                </div>
                <span className="tag">{row.progress}%</span>
              </div>
              <div className="progress">
                <span style={{ width: `${row.progress}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
