import type { NoteAsset } from "../lib/types";

const notes: NoteAsset[] = [
  {
    title: "Chemistry lab PDF",
    type: "pdf",
    tag: "Chemistry",
    aiSummary: "Summarized into 6 key reaction rules."
  },
  {
    title: "Calculus handwritten notes",
    type: "image",
    tag: "Math",
    aiSummary: "OCR extracted 28 formulas."
  },
  {
    title: "History documentary",
    type: "video",
    tag: "History",
    aiSummary: "Highlights 3 main turning points."
  }
];

export default function NotesVaultCard() {
  return (
    <div className="card">
      <div className="section-title">
        <h2>Notes vault</h2>
        <span className="pill">Search + OCR</span>
      </div>
      <div className="list">
        {notes.map((note) => (
          <div key={note.title} className="list-item">
            <div>
              <strong>{note.title}</strong>
              <p className="muted">{note.aiSummary}</p>
            </div>
            <span className="tag">{note.tag}</span>
          </div>
        ))}
      </div>
      <div className="toolbar" style={{ marginTop: 16 }}>
        <button className="button" type="button">
          Upload notes
        </button>
        <button className="button button-secondary" type="button">
          AI summary
        </button>
      </div>
    </div>
  );
}
