import { useState } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage.js'
import { useMenu } from './data/useMenu.js'
import TodayPage from './pages/TodayPage.jsx'
import WeekPage from './pages/WeekPage.jsx'
import ShopPage from './pages/ShopPage.jsx'
import TodosPage from './pages/TodosPage.jsx'

const TABS = [
  { id: 'today', label: 'Today', icon: '☀️' },
  { id: 'week', label: 'Week', icon: '🍽️' },
  { id: 'shop', label: 'Shop', icon: '🛒' },
  { id: 'todos', label: 'Todos', icon: '✓' },
]

// App is now just the shell: which tab is showing, plus any state that more
// than one page needs. Meal data is read by Today AND edited by Week, so it
// lives here and gets passed down ("lifting state up" again).
export default function App() {
  const [tab, setTab] = useState('today')
  const menu = useMenu()
  const [plans, setPlans] = useLocalStorage('daytoday.mealPlans', {})
  // Everything chosen for a single day, by date:
  //   { '2026-10-27': { lunch: 'Soup', breakfast: 'Toast', snack: 'Banana', fruit: 3 } }
  // Kept apart from the dinner plan so shuffling dinners doesn't wipe them.
  const [picks, setPicks] = useLocalStorage('daytoday.dayPicks', {})

  // ⚠️ Pass a function, not a new object. `picks` here is a snapshot from the
  // last render, so calling setPick several times in a row (e.g. shuffling a
  // whole week) would have each call overwrite the previous one. Given a
  // function, React hands it the latest value each time, so updates stack up.
  function setPick(date, key, value) {
    setPicks(prev => ({ ...prev, [date]: { ...prev[date], [key]: value } }))
  }

  const mealProps = { menu, plans, picks, setPick }

  return (
    <>
      {/* <>...</> is a Fragment: groups elements without adding an extra <div>. */}
      <main className="app">
        {tab === 'today' && <TodayPage {...mealProps} onPlanWeek={() => setTab('week')} />}
        {tab === 'week' && <WeekPage {...mealProps} setPlans={setPlans} />}
        {tab === 'shop' && <ShopPage menu={menu} plans={plans} picks={picks} />}
        {tab === 'todos' && <TodosPage />}
      </main>

      <nav className="tabs">
        {TABS.map(t => (
          <button
            key={t.id}
            className={tab === t.id ? 'active' : ''}
            onClick={() => setTab(t.id)}
          >
            <span aria-hidden="true">{t.icon}</span>
            {t.label}
          </button>
        ))}
      </nav>
    </>
  )
}
