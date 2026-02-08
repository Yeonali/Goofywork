import type { PlannerDay } from "../lib/types";

const days: PlannerDay[] = [
  { day: "Mon", items: ["Math revision", "Gym", "Project brief"] },
  { day: "Tue", items: ["Chemistry lab", "Club meeting"] },
  { day: "Wed", items: ["Biology quiz", "Reading session"] },
  { day: "Thu", items: ["History essay", "Practice test"] },
  { day: "Fri", items: ["Mock exam", "Family time"] },
  { day: "Sat", items: ["Restorative break", "Light review"] },
  { day: "Sun", items: ["Weekly reflection", "Plan next week"] }
];

export default function WeeklyPlannerBoard() {
  return (
    <div className="card">
      <div className="section-title">
        <h2>Weekly planner</h2>
        <span className="pill">Mon - Sun</span>
      </div>
      <div className="grid grid-3">
        {days.map((day) => (
          <div key={day.day} className="list">
            <strong>{day.day}</strong>
            {day.items.map((item) => (
              <div key={item} className="list-item">
                <span>{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
