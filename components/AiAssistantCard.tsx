import { fallbackSuggestions } from "../lib/ai";

export default function AiAssistantCard() {
  return (
    <div className="card">
      <div className="section-title">
        <h2>AI assistant</h2>
        <span className="badge">Guidance</span>
      </div>
      <div className="callout">
        <strong>Suggestion of the day</strong>
        <p className="muted">
          You are falling behind in Math. Prioritize 2 high-yield problem sets this week.
        </p>
      </div>
      <div className="list" style={{ marginTop: 16 }}>
        {fallbackSuggestions.map((suggestion) => (
          <div key={suggestion.title} className="list-item">
            <div>
              <strong>{suggestion.title}</strong>
              <p className="muted">{suggestion.detail}</p>
            </div>
            <span className="tag">AI</span>
          </div>
        ))}
      </div>
    </div>
  );
}
