// A "presentational" component: no state of its own, just renders props
// and calls the callbacks it was given. Most of your components should look like this.
export default function TodoItem({ todo, onToggle, onDelete, onMove }) {
  return (
    <li className={todo.done ? 'todo done' : 'todo'}>
      <label>
        <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} />
        <span>{todo.text}</span>
      </label>
      {/* Arrow functions `() => ...` are lambdas, same idea as Java's `() -> ...`. */}
      <button
        className="ghost"
        onClick={() => onMove(todo.id)}
        title={todo.bucket === 'core' ? 'Move to When free' : 'Move to Core'}
      >
        {todo.bucket === 'core' ? '↓' : '↑'}
      </button>
      <button className="ghost" onClick={() => onDelete(todo.id)} title="Delete">✕</button>
    </li>
  )
}
