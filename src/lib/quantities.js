// Weights and spoons don't get a plural; everything else does ("2 tins").
const NO_PLURAL = ['g', 'kg', 'ml', 'l', 'tsp', 'tbsp']
const NO_SPACE = ['g', 'kg', 'ml', 'l']

// { qty: 500, unit: 'g' } -> "500g",  { qty: 2, unit: 'tin' } -> "2 tins",  { qty: 4 } -> "4"
export function formatQty({ qty, unit }) {
  if (!unit) return String(qty)
  if (NO_SPACE.includes(unit)) return `${qty}${unit}`
  const plural = qty === 1 || NO_PLURAL.includes(unit) ? unit : unit + (unit.endsWith('h') ? 'es' : 's')
  return `${qty} ${plural}`
}
