import { useState } from 'react'

// Props arrive as one object; `{ onAdd }` destructures the field we need.
// Like a Go func taking a struct, but unpacked in the signature.
export default function AddTodo({ onAdd }) {
  // Local state: only this component cares about what's currently typed.
  const [text, setText] = useState('')
  const [bucket, setBucket] = useState('core')

  function handleSubmit(e) {
    e.preventDefault() // stop the browser's default "reload page on form submit"
    const trimmed = text.trim()
    if (!trimmed) return // '' is "falsy" in JS, so !'' === true
    onAdd(trimmed, bucket)
    setText('')
  }

  // A "controlled input": React state is the source of truth, and every
  // keystroke flows through setText -> re-render -> value={text}.
  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="What needs doing?"
        aria-label="New todo"
      />
      <div className="bucket-picker" role="radiogroup" aria-label="Which list">
        {['core', 'someday'].map(b => (
          // `key` helps React track list items between renders — must be unique & stable.
          <button
            key={b}
            type="button"
            role="radio"
            aria-checked={bucket === b}
            className={bucket === b ? 'active' : ''}
            onClick={() => setBucket(b)}
          >
            {b === 'core' ? 'Core' : 'When free'}
          </button>
        ))}
      </div>
      <button type="submit" className="primary">Add</button>
    </form>
  )
}
