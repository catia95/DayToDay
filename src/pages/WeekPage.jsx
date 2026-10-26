import { useState } from 'react'
import DayMeals, { MealRow } from '../components/DayMeals.jsx'
import Ingredients from '../components/Ingredients.jsx'
import { SKIP, findMeal, names, shuffled, suggestWeek, themeFor } from '../lib/mealPlan.js'
import { WEEK, addDays, formatDay, isoDate, startOfWeek } from '../lib/dates.js'

export default function WeekPage({ menu, plans, setPlans, picks, setPick }) {
  // 0 = this week, 1 = next week. UI-only state, so plain useState (not saved).
  const [weekOffset, setWeekOffset] = useState(0)

  const monday = startOfWeek(addDays(new Date(), weekOffset * 7))
  const weekKey = isoDate(monday)
  const plan = plans[weekKey] ?? {}
  const lastWeek = plans[isoDate(addDays(monday, -7))] ?? {}

  // `[weekKey]: ...` is a computed key: the key's name comes from a variable.
  function setPlan(newPlan) {
    setPlans({ ...plans, [weekKey]: newPlan })
  }

  const days = WEEK.map((day, i) => ({ day, date: addDays(monday, i), theme: themeFor(menu, day) }))
  const unplanned = days.filter(d => d.theme && !plan[d.day]).length

  // "Fill in" keeps anything you've picked or skipped; "Shuffle" redoes the
  // whole week, clearing skips too.
  function suggest() {
    const fillOnly = unplanned > 0

    // Spread order matters: later wins. So when filling gaps, your own picks
    // (`...plan`) override the random suggestions.
    const suggestion = suggestWeek(menu, lastWeek)
    setPlan(fillOnly ? { ...suggestion, ...plan } : suggestion)

    const breakfasts = shuffled(names(menu.breakfasts))
    const snacks = shuffled(names(menu.snacks))
    days.forEach(({ date }, i) => {
      const iso = isoDate(date)
      if (!fillOnly || !picks[iso]?.breakfast) setPick(iso, 'breakfast', breakfasts[i % breakfasts.length])
      if (!fillOnly || !picks[iso]?.snack) setPick(iso, 'snack', snacks[i % snacks.length])
      if (!fillOnly && picks[iso]?.lunch === SKIP) setPick(iso, 'lunch', '')
    })
  }

  function choose(day, mealName) {
    const { [day]: _removed, ...rest } = plan // copy of plan without `day`
    setPlan(mealName ? { ...rest, [day]: mealName } : rest)
  }

  return (
    <>
      <header>
        <h1>Meals</h1>
        <div className="bucket-picker">
          {['This week', 'Next week'].map((label, i) => (
            <button key={label} className={weekOffset === i ? 'active' : ''} onClick={() => setWeekOffset(i)}>
              {label}
            </button>
          ))}
        </div>
      </header>

      <div className="week-actions">
        <span className="hint">
          {formatDay(monday, { day: 'numeric', month: 'short' })} – {formatDay(addDays(monday, 6), { day: 'numeric', month: 'short' })}
        </span>
        <button className="primary" onClick={suggest}>
          {unplanned > 0 ? '✨ Fill in the week' : '✨ Shuffle week'}
        </button>
      </div>

      <ul className="week">
        {days.map(({ day, date, theme }) => (
          <li key={day} className="card">
            <div className="day-head">
              <strong>{formatDay(date, { weekday: 'short', day: 'numeric' })}</strong>
              <span className="hint">{theme ? theme.name : 'Freestyle'}</span>
            </div>

            <div className="meal-rows">
              {theme && (
                <MealRow label="Dinner">
                  <select
                    value={plan[day] ?? ''}
                    onChange={e => choose(day, e.target.value)}
                    className={plan[day] === SKIP ? 'skipped' : ''}
                  >
                    <option value="">Pick a dinner…</option>
                    {theme.meals.map(m => (
                      <option key={m.name} value={m.name}>
                        {m.name}{m.leftovers ? ' 🍱' : ''}
                      </option>
                    ))}
                    <option value={SKIP}>Skip (away)</option>
                  </select>
                  <Ingredients meal={findMeal(menu, plan[day])} servings={menu.servings} />
                </MealRow>
              )}
              <DayMeals menu={menu} plans={plans} picks={picks} setPick={setPick} date={date} />
            </div>
          </li>
        ))}
      </ul>
      <p className="hint">🍱 = makes leftovers: cook double for the next day’s lunch.</p>
    </>
  )
}
