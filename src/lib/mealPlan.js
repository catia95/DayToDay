import { addDays, dayKey, isoDate, startOfWeek } from './dates.js'

// Plain functions with no React in them, so they're easy to reason about and test.
// The lists come in as `menu` (from useMenu) rather than being imported, the
// same as passing a dependency into a Go function instead of using a global.
//
// All saved plans live in one object, keyed by the Monday of each week:
//   { '2026-10-26': { Mon: 'Carbonara', Tue: 'Pataniscas & loose rice', ... } }

export function themeFor(menu, day) {
  return menu.themes.find(t => t.day === day)
}

export function findMeal(menu, name) {
  for (const theme of menu.themes) {
    const meal = theme.meals.find(m => m.name === name)
    if (meal) return meal
  }
  return null
}

export function dinnerOn(plans, date) {
  // `?.` stops and returns undefined if the left side is null/undefined
  // (no plan for that week yet), and `??` swaps undefined for null.
  // Saves writing nested null checks.
  return plans[isoDate(startOfWeek(date))]?.[dayKey(date)] ?? null
}

// Last night's dinner, if it makes good leftovers.
export function leftoversFor(menu, plans, date) {
  const name = dinnerOn(plans, addDays(date, -1))
  return name && findMeal(menu, name)?.leftovers ? name : null
}

// The idea a day starts on before you pick: steps through the list one day
// at a time, so each day defaults to something different.
export function defaultIdea(list, date) {
  const dayNumber = Math.floor(Date.parse(isoDate(date)) / 86_400_000)
  return list[dayNumber % list.length]
}

export function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

// A randomly ordered copy (Fisher–Yates shuffle). Dealing these out one per day
// means nothing repeats in a week until the list runs out.
export function shuffled(list) {
  const copy = [...list]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = copy[i]
    copy[i] = copy[j]
    copy[j] = temp
  }
  return copy
}

// A random meal for every themed day, avoiding whatever that day had last week.
export function suggestWeek(menu, lastWeek = {}) {
  const plan = {}
  for (const theme of menu.themes) {
    const fresh = theme.meals.filter(m => m.name !== lastWeek[theme.day])
    plan[theme.day] = pickRandom(fresh.length > 0 ? fresh : theme.meals).name
  }
  return plan
}
