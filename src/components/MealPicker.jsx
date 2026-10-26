import { SKIP } from '../lib/mealPlan.js'

// One dropdown for every kind of meal choice.
//   groups:      [{ label: 'Quick', names: ['Soup', ...] }]; label is optional
//   placeholder: if given, an extra first option meaning "nothing picked" (value '')
//   skippable:   adds a last "Skip (away)" option
export default function MealPicker({ value, onChange, groups, placeholder, skippable = false }) {
  return (
    <select value={value ?? ''} onChange={e => onChange(e.target.value)} className={value === SKIP ? 'skipped' : ''}>
      {placeholder && <option value="">{placeholder}</option>}
      {groups.map(({ label, names }) => {
        const options = names.map(name => <option key={name} value={name}>{name}</option>)
        return label ? <optgroup key={label} label={label}>{options}</optgroup> : options
      })}
      {skippable && <option value={SKIP}>Skip (away)</option>}
    </select>
  )
}
