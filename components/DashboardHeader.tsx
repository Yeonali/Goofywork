export default function DashboardHeader() {
  return (
    <div className="header">
      <div>
        <h1>StudyFlow AI Planner</h1>
        <p className="muted">
          Your Notion-meets-calendar workspace for smarter study, habits, and exams.
        </p>
      </div>
      <div className="toolbar">
        <button className="button button-secondary" type="button">
          Focus Mode
        </button>
        <button className="button" type="button">
          Generate Schedule
        </button>
      </div>
    </div>
  );
}
