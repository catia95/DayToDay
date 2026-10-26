// Entry point — the equivalent of `public static void main` / `func main()`.
// `import` is like Go's import, but you name exactly what you pull in.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'

// Find <div id="root"> in index.html and tell React to render <App/> inside it.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
