import { formatQty } from './quantities.js'

// kg and l are stored as g and ml so they add up with each other.
const TO_BASE = { kg: ['g', 1000], l: ['ml', 1000] }

// One combined list for a week's dishes (from weekDishes): the same item across
// dishes becomes one line with its quantities added up, e.g. 3 x 1 onion -> "Onion 3".
// A dish eaten on several days counts each time.
// Different units can't be added ("1 tin" + "250g"), so they're shown side by side.
export function buildShoppingList(menu, dishes) {
  // A Map keeps keys in the order they were added, like Java's LinkedHashMap.
  const byItem = new Map()

  for (const meal of dishes) {
    for (const ing of meal.ingredients ?? []) {
      const key = ing.item.toLowerCase()
      const entry = byItem.get(key) ?? { key, name: ing.item, totals: {}, meals: [] }

      // `let` (not const) because these get reassigned below.
      let { qty, unit = '' } = ing
      if (TO_BASE[unit]) {
        const [baseUnit, factor] = TO_BASE[unit]
        qty *= factor
        unit = baseUnit
      }
      entry.totals[unit] = (entry.totals[unit] ?? 0) + qty
      if (!entry.meals.includes(meal.name)) entry.meals.push(meal.name)

      byItem.set(key, entry)
    }
  }

  // A Set is like Java's HashSet: fast "is this in it?" checks.
  const staples = new Set(menu.staples.map(s => s.toLowerCase()))

  return [...byItem.values()]
    .map(({ key, name, totals, meals }) => {
      const staple = staples.has(key)
      return { key, name, meals, amount: formatTotals(totals), staple, keep: !staple, got: false }
    })
    .sort((a, b) => a.name.localeCompare(b.name))
}

// { g: 1250, tin: 2 } -> "1.25kg + 2 tins"
function formatTotals(totals) {
  return Object.entries(totals)
    .map(([unit, qty]) => {
      if (unit === 'g' && qty >= 1000) return formatQty({ qty: qty / 1000, unit: 'kg' })
      if (unit === 'ml' && qty >= 1000) return formatQty({ qty: qty / 1000, unit: 'l' })
      return formatQty({ qty, unit: unit || undefined })
    })
    .join(' + ')
}
