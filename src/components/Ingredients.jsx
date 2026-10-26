import { formatQty } from '../lib/quantities.js'

// <details> is a built-in HTML collapsible: click the <summary> to open it.
// No React state needed, the browser handles open/closed itself.
export default function Ingredients({ meal, servings }) {
  if (!meal?.ingredients?.length) return null // returning null renders nothing

  return (
    <details className="ingredients">
      <summary>Ingredients · serves {servings}</summary>
      <ul>
        {meal.ingredients.map(ing => (
          <li key={ing.item}>
            <span>{ing.item}</span>
            <span className="qty">{formatQty(ing)}</span>
          </li>
        ))}
      </ul>
    </details>
  )
}
