import type { Exam } from "../lib/types";

const exams: Exam[] = [
  {
    name: "Biology Midterm",
    subject: "Biology",
    date: "Oct 21",
    revisionFocus: "Genetics, Cell division"
  },
  {
    name: "Math Quiz",
    subject: "Mathematics",
    date: "Oct 25",
    revisionFocus: "Integration + Series"
  }
];

export default function ExamTrackerCard() {
  return (
    <div className="card">
      <div className="section-title">
        <h2>Exam tracker</h2>
        <span className="pill">Countdowns</span>
      </div>
      <div className="list">
        {exams.map((exam) => (
          <div key={exam.name} className="list-item">
            <div>
              <strong>{exam.name}</strong>
              <p className="muted">
                {exam.subject} · {exam.revisionFocus}
              </p>
            </div>
            <span className="tag">{exam.date}</span>
          </div>
        ))}
      </div>
      <p className="muted" style={{ marginTop: 12 }}>
        AI recommends 2 revision blocks and a practice test 3 days before.
      </p>
    </div>
  );
}
