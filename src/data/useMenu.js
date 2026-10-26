import { themes, breakfasts, snacks, quickLunches, weekendLunches, FRUIT_GOAL, SERVINGS } from './meals.js'

// The ONE place the app gets its food lists from: think repository interface.
// Today it returns the lists written in meals.js. Later it will load them from
// the database (and add a `loading` flag); the pages that call it won't change.
export function useMenu() {
  return { themes, breakfasts, snacks, quickLunches, weekendLunches, fruitGoal: FRUIT_GOAL, servings: SERVINGS }
}
