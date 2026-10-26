import MealPicker from './MealPicker.jsx'
import { breakfastOn, leftoversFor, names, snackOn } from '../lib/mealPlan.js'
import { isWeekend, isoDate } from '../lib/dates.js'

// Lunch, breakfast and snack pickers for one day. Shared by Today and Week.
export default function DayMeals({ menu, plans, picks, setPick, date }) {
  const iso = isoDate(date)
  const day = picks[iso] ?? {}
  const leftovers = leftoversFor(menu, plans, date)

  // A function that returns a function: set('lunch') gives back the onChange
  // handler for lunch. Saves writing three near-identical arrow functions.
  const set = key => value => setPick(iso, key, value)

  const lunchGroups = [
    // Spreading an empty array adds nothing: a neat way to include an item conditionally.
    ...(isWeekend(date) ? [{ label: 'Weekend cooking', names: menu.weekendLunches }] : []),
    { label: 'Quick', names: menu.quickLunches },
  ]

  return (
    <>
      <MealRow label="Lunch">
        <MealPicker
          value={day.lunch}
          onChange={set('lunch')}
          groups={lunchGroups}
          placeholder={leftovers ? `Leftover ${leftovers}` : 'Pick a lunch…'}
          skippable
        />
      </MealRow>
      {/* No placeholder here: until you pick, the value is that day's default idea. */}
      <MealRow label="Breakfast">
        <MealPicker
          value={breakfastOn(menu, picks, date)}
          onChange={set('breakfast')}
          groups={[{ names: names(menu.breakfasts) }]}
        />
      </MealRow>
      <MealRow label="Snack">
        <MealPicker
          value={snackOn(menu, picks, date)}
          onChange={set('snack')}
          groups={[{ names: names(menu.snacks) }]}
        />
      </MealRow>
    </>
  )
}

// A named export alongside the default one, so pages can line up their own rows.
export function MealRow({ label, children }) {
  return (
    <div className="meal-row">
      <div className="meal-row-label">{label}</div>
      <div className="meal-row-value">{children}</div>
    </div>
  )
}
