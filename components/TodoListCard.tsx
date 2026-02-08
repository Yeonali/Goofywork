import type { Todo } from "../lib/types";

const todos: Todo[] = [
  { task: "Submit physics assignment", priority: "High", due: "Today" },
  { task: "Review calculus flashcards", priority: "Medium", due: "Tomorrow" },
  { task: "Organize lab notes", priority: "Low", due: "Fri" }
];

export default function TodoListCard() {
  return (
    <div className="card">
      <div className="section-title">
        <h2>Smart to-do list</h2>
        <span className="pill">AI sorted</span>
      </div>
      <div className="list">
        {todos.map((todo) => (
          <div key={todo.task} className="list-item">
            <div>
              <strong>{todo.task}</strong>
              <p className="muted">Due: {todo.due}</p>
            </div>
            <span className="tag">{todo.priority}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
