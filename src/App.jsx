import { useLocalStorage } from './hooks/useLocalStorage.js'
import AddTodo from './components/AddTodo.jsx'
import TodoList from './components/TodoList.jsx'

// A component is just a function that returns UI (JSX).
// React calls it again every time its state changes — it's a re-render, not
// a mutation of existing objects. Think "pure function: state -> UI".
export default function App() {
  // State lives here, in the top-most component that needs it ("lifting state up").
  // Children get data via props and report changes back via callback props.
  const [todos, setTodos] = useLocalStorage('daytoday.todos', [])

  // ⚠️ Never mutate state (no todos.push(...)). Always build a NEW array/object.
  // React compares references (like Java ==, not .equals) to decide what changed.
  // `...todos` is the spread operator: copy all elements into the new array.
  function addTodo(text, bucket) {
    const todo = { id: crypto.randomUUID(), text, bucket, done: false, createdAt: Date.now() }
    setTodos([todo, ...todos])
  }

  function toggleTodo(id) {
    // `{ ...t, done: !t.done }` = copy of t with one field overridden.
    setTodos(todos.map(t => (t.id === id ? { ...t, done: !t.done } : t)))
  }

  function deleteTodo(id) {
    setTodos(todos.filter(t => t.id !== id))
  }

  function moveTodo(id) {
    setTodos(todos.map(t =>
      t.id === id ? { ...t, bucket: t.bucket === 'core' ? 'someday' : 'core' } : t,
    ))
  }

  const core = todos.filter(t => t.bucket === 'core')
  const someday = todos.filter(t => t.bucket === 'someday')
  const actions = { onToggle: toggleTodo, onDelete: deleteTodo, onMove: moveTodo }

  // JSX: HTML-like syntax that compiles to function calls.
  // Differences from HTML: `className` not `class`, `{expr}` embeds any JS expression.
  return (
    <main className="app">
      <header>
        <h1>DayToDay</h1>
        <p className="tagline">Finish things, not start them.</p>
      </header>

      <AddTodo onAdd={addTodo} />

      <TodoList
        title="Core"
        hint="Real consequences if missed: fines, renewals, deadlines."
        todos={core}
        {...actions}
      />
      <TodoList
        title="When free"
        hint="Nice-to-haves. Keep this short."
        todos={someday}
        {...actions}
      />
    </main>
  )
}
