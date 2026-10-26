import TodoItem from './TodoItem.jsx'

// `...actions` collects the remaining props (onToggle/onDelete/onMove) into one
// object, which we pass straight through to each TodoItem with {...actions}.
export default function TodoList({ title, hint, todos, ...actions }) {
  const open = todos.filter(t => !t.done)
  const done = todos.filter(t => t.done)

  return (
    <section className="todo-list">
      <h2>
        {title} <span className="count">{open.length}</span>
      </h2>
      <p className="hint">{hint}</p>

      {/* `cond && <X/>` is the JSX idiom for "render X only if cond". */}
      {todos.length === 0 && <p className="empty">Nothing here.</p>}

      <ul>
        {/* Lists are rendered by mapping data to elements — there's no for-loop in JSX. */}
        {[...open, ...done].map(todo => (
          <TodoItem key={todo.id} todo={todo} {...actions} />
        ))}
      </ul>
    </section>
  )
}
