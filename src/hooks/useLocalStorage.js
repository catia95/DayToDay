import { useEffect, useState } from 'react'

// A "custom hook": a plain function whose name starts with `use` and that calls
// other hooks. It's React's way of sharing stateful logic between components
// (where Java would reach for a base class or injected service).
//
// Works exactly like useState, but the value is also saved in the browser's
// localStorage, so it survives a page reload. Later we can swap this for a
// real backend without touching the components that use it.
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    // Passing a function to useState means "only compute this on first render".
    const saved = localStorage.getItem(key)
    return saved !== null ? JSON.parse(saved) : initialValue
  })

  // useEffect = "run this side effect after rendering, whenever the
  // values in the dependency array [key, value] change".
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  // Returning an array lets callers destructure and name both parts:
  //   const [todos, setTodos] = useLocalStorage('todos', [])
  // Similar to Go's multiple return values.
  return [value, setValue]
}
