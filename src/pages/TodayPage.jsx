import DayMeals, { MealRow } from '../components/DayMeals.jsx'
import Ingredients from '../components/Ingredients.jsx'
import { dinnerOn, findMeal, themeFor } from '../lib/mealPlan.js'
import { dayKey, formatDay, isoDate } from '../lib/dates.js'

export default function TodayPage({ menu, plans, picks, setPick, onPlanWeek }) {
  const now = new Date()
  const today = isoDate(now)
  const theme = themeFor(menu, dayKey(now))
  const dinner = dinnerOn(plans, now)
  const meal = dinner && findMeal(menu, dinner)
  // Each date gets a fresh entry, so the count starts at 0 every morning.
  const fruit = picks[today]?.fruit ?? 0

  return (
    <>
      <header>
        <h1>{formatDay(now)}</h1>
        <p className="tagline">{theme ? theme.name : 'Weekend: freestyle'}</p>
      </header>

      <section className="card meal-rows">
        <MealRow label="Tonight">
          {dinner ? (
            <>
              {dinner}
              {meal?.leftovers && <span className="tag">makes lunch</span>}
              <Ingredients meal={meal} servings={menu.servings} />
            </>
          ) : theme ? (
            <button className="link" onClick={onPlanWeek}>Not planned yet: plan the week →</button>
          ) : (
            'Freestyle'
          )}
        </MealRow>
        <DayMeals menu={menu} plans={plans} picks={picks} setPick={setPick} date={now} />
      </section>

      <section className="fruit">
        <h2>
          Fruit today <span className="count">{fruit}/{menu.fruitGoal}</span>
        </h2>
        <div className="fruit-slots">
          {/* Array.from({ length: 5 }, fn) builds [fn(_, 0), ..., fn(_, 4)]: a range loop. */}
          {Array.from({ length: menu.fruitGoal }, (_, i) => (
            <button
              key={i}
              className={i < fruit ? 'filled' : ''}
              // Tap the last filled one again to undo it.
              onClick={() => setPick(today, 'fruit', fruit === i + 1 ? i : i + 1)}
              aria-label={`${i + 1} fruit`}
            >
              {i < fruit ? '🍎' : ''}
            </button>
          ))}
        </div>
      </section>
    </>
  )
}
