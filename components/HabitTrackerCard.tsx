import type { Habit } from "../lib/types";

const habits: Habit[] = [
  { name: "Study hours", streak: 7, weeklyTarget: "15h" },
  { name: "Reading", streak: 5, weeklyTarget: "4 sessions" },
  { name: "Sleep before 11PM", streak: 3, weeklyTarget: "5 nights" }
];

export default function HabitTrackerCard() {
  return (
    <div className="card">
      <div className="section-title">
        <h2>Habit tracker</h2>
        <span className="pill">Streaks</span>
      </div>
      <div className="list">
        {habits.map((habit) => (
          <div key={habit.name} className="list-item">
            <div>
              <strong>{habit.name}</strong>
              <p className="muted">Target: {habit.weeklyTarget}</p>
            </div>
            <span className="tag">{habit.streak} day streak</span>
          </div>
        ))}
      </div>
      <p className="muted" style={{ marginTop: 12 }}>
        AI insight: focus dips after 11PM. Schedule lighter tasks late evening.
      </p>
    </div>
  );
}
