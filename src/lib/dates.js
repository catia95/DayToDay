// JS has one built-in date type, `Date`, and it's mutable and awkward.
// These small helpers keep the rest of the code readable.

// Date.getDay() numbers days from Sunday = 0.
const DAY_KEYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// The order we show a week in.
export const WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export function dayKey(date) {
  return DAY_KEYS[date.getDay()]
}

export function isWeekend(date) {
  const day = date.getDay()
  return day === 0 || day === 6
}

// "2026-10-26". ⚠️ Don't use date.toISOString() for this: it converts to UTC,
// which shifts the date by a day for part of the night in some timezones.
export function isoDate(date) {
  const pad = n => String(n).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

// "2026-10-26" -> Date at local midnight. ⚠️ new Date('2026-10-26') would read
// it as UTC midnight, which is still the previous day in timezones west of UTC.
export function parseIsoDate(iso) {
  const [year, month, day] = iso.split('-').map(Number)
  return new Date(year, month - 1, day)
}

// Returns a new Date; never modify the one passed in (same rule as React state).
export function addDays(date, days) {
  const copy = new Date(date)
  copy.setDate(copy.getDate() + days)
  return copy
}

// The Monday of the week containing `date`.
export function startOfWeek(date) {
  return addDays(date, -((date.getDay() + 6) % 7))
}

export function formatDay(date, options = { weekday: 'long', day: 'numeric', month: 'short' }) {
  return date.toLocaleDateString('en-GB', options)
}
